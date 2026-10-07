"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { ru } from "@/content/ru";

const CODE_LENGTH = 6;

export default function LoginPage() {
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [countdown, setCountdown] = useState(42);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef<number | null>(null);

  function startCountdown(seconds: number) {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    setCanResend(false);
    setCountdown(seconds);
    timerRef.current = window.setInterval(() => {
      setCountdown((value) => {
        const next = value - 1;
        if (next <= 0) {
          if (timerRef.current) {
            window.clearInterval(timerRef.current);
          }
          setCanResend(true);
          return 0;
        }
        return next;
      });
    }, 1000);
  }

  function handleChange(index: number, raw: string) {
    const clean = raw.replace(/[^0-9]/g, "").slice(0, 1);
    const next = [...digits];
    next[index] = clean;
    setDigits(next);
    if (clean && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
      const next = [...digits];
      next[index - 1] = "";
      setDigits(next);
    }
  }

  function handlePaste(event: React.ClipboardEvent) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    const next = Array(CODE_LENGTH).fill("");
    for (let i = 0; i < pasted.length; i += 1) {
      next[i] = pasted[i];
    }
    setDigits(next);
    const nextIndex = Math.min(next.findIndex((d) => !d), CODE_LENGTH - 1);
    inputsRef.current[nextIndex >= 0 ? nextIndex : CODE_LENGTH - 1]?.focus();
  }

  const formattedCountdown = `0:${countdown < 10 ? "0" + countdown : countdown}`;

  return (
    <div className="flex min-h-full flex-col bg-canvas pb-nav">
      <div className="mx-auto flex w-full max-w-[390px] flex-1 flex-col px-margin pb-8">
        <div className="mb-md flex items-center justify-between py-sm">
          <Link
            href="/"
            aria-label="Вернуться назад"
            className="flex size-10 items-center justify-center rounded-pill border border-line bg-card text-ink"
          >
            <Icon name="back" className="size-5" />
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-card px-3 py-1.5">
            <span className="size-2 rounded-pill bg-accent" />
            <span className="text-label-md uppercase tracking-tight text-ink">{ru.login.brandBadge}</span>
          </span>
          <span className="size-10" />
        </div>

        <div className="flex w-full flex-col rounded-card border border-line bg-card p-xl shadow-card">
          <div className="mb-xl flex flex-col">
            <h1 className="mb-xs text-headline-lg text-ink">{ru.login.title}</h1>
            <p className="flex flex-wrap items-center gap-1 text-body-md text-muted">
              <span>{ru.login.sentToPrefix}</span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-canvas px-2 py-0.5 font-medium text-ink">
                <Icon name="mail" className="size-3.5 text-muted" />
                {ru.login.email}
              </span>
            </p>
          </div>

          <form
            className="flex flex-col gap-xl"
            onSubmit={(event) => {
              event.preventDefault();
              // TODO(auth): submit code to API once implemented.
            }}
          >
            <div className="flex items-center justify-between gap-1.5">
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  aria-label={`${ru.login.digitLabel} ${index + 1}`}
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onPaste={(event) => index === 0 && handlePaste(event)}
                  className="h-14 w-11 rounded-input bg-canvas text-center text-display-lg text-ink outline-none transition-colors focus:bg-line sm:w-12"
                />
              ))}
            </div>

            <div className="flex flex-col gap-md pt-xs">
              <Button type="submit" fullWidth>
                {ru.login.submit}
                <Icon name="arrow" className="size-4" />
              </Button>

              <div className="flex flex-col items-center justify-center pt-xs text-center">
                {!canResend ? (
                  <div className="flex items-center gap-1.5 text-body-sm text-muted">
                    <span>{ru.login.resendIn}</span>
                    <span className="text-label-md font-semibold text-ink">{formattedCountdown}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => startCountdown(45)}
                    className="py-1 text-label-md text-ink underline underline-offset-4"
                  >
                    {ru.login.resend}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="mt-lg flex items-center gap-3 rounded-card border border-line bg-card px-md py-sm shadow-card">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink">
            <Icon name="verified" className="size-5" />
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="text-label-md leading-tight text-ink">{ru.login.trustTitle}</span>
            <span className="truncate text-body-sm leading-snug text-muted">{ru.login.trustText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

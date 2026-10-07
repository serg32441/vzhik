import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ invalid = false, className, ...props }: InputProps) {
  const classes = [
    "h-control w-full rounded-input border bg-card px-lg text-body-md text-ink placeholder:text-muted",
    invalid ? "border-danger" : "border-line",
    "focus:border-ink focus:outline-none",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <input className={classes} aria-invalid={invalid || undefined} {...props} />;
}

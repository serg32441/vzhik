import Link from "next/link";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

const rows = [
  { label: ru.wave.homeLabel, value: ru.wave.home },
  { label: ru.wave.collectUntilLabel, value: ru.wave.collectUntil },
  { label: ru.wave.deliveryDateLabel, value: ru.wave.deliveryDate },
  { label: ru.wave.goodsLabel, value: ru.wave.price },
  { label: ru.wave.deliveryCostLabel, value: ru.wave.deliveryCost },
];

export default function WavePage() {
  return (
    <div className="min-h-full bg-canvas pb-nav">
      <div className="mx-auto w-full max-w-[390px]">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-card px-margin">
          <div className="flex items-center gap-sm">
            <span className="text-headline-md uppercase text-ink">{ru.brand}</span>
            <span className="text-body-sm text-muted">/</span>
            <h1 className="text-title-md text-ink">{ru.wave.section}</h1>
          </div>
          <div className="flex size-8 items-center justify-center rounded-pill bg-ink text-on-ink" aria-hidden="true">
            <Icon name="person" className="size-4" />
          </div>
        </header>

        <main className="flex flex-col gap-md px-margin pb-2xl pt-md">
          <div className="flex items-center justify-between">
            <Link
              href="/c/dairy"
              aria-label={ru.group.back}
              className="flex size-10 items-center justify-center rounded-pill border border-line bg-card text-ink shadow-card"
            >
              <Icon name="back" className="size-5" />
            </Link>
            <p className="text-label-md text-muted">{ru.wave.number}</p>
          </div>

          <Card className="flex items-center gap-md p-md">
            <span className="size-14 shrink-0 rounded-lg bg-canvas" />
            <span className="flex min-w-0 flex-1 flex-col gap-xs">
              <span className="text-title-md text-ink">{ru.wave.productName}</span>
              <span className="text-body-sm text-muted">{ru.wave.quantity}</span>
            </span>
            <span className="text-label-price text-ink">{ru.wave.price}</span>
          </Card>

          <dl className="flex flex-col gap-sm">
            <div className="flex items-center justify-between gap-md">
              <dt className="text-body-md text-muted">{ru.wave.homeLabel}</dt>
              <dd className="text-body-md text-ink">{ru.wave.home}</dd>
            </div>
            <div className="flex items-center justify-between gap-md">
              <dt className="text-body-md text-muted">{ru.wave.statusLabel}</dt>
              <dd className="rounded-pill bg-accent px-sm py-xs text-label-md text-on-accent">{ru.wave.status}</dd>
            </div>
            {rows.slice(1, 3).map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-md">
                <dt className="text-body-md text-muted">{row.label}</dt>
                <dd className="text-right text-body-md text-ink">{row.value}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between gap-md">
              <dt className="text-body-md text-muted">{ru.wave.progressLabel}</dt>
              <dd className="text-right text-body-md text-ink">{ru.wave.progressValue}</dd>
            </div>
          </dl>

          <div className="flex flex-col gap-xs">
            <ProgressBar value={91} label={ru.wave.progressValue} />
            <p className="text-body-sm text-muted">{ru.wave.remaining}</p>
          </div>

          <dl className="flex flex-col gap-sm">
            {rows.slice(3).map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-md">
                <dt className="text-body-md text-muted">{row.label}</dt>
                <dd className="text-body-md text-ink">{row.value}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between gap-md">
              <dt className="text-title-md text-ink">{ru.wave.totalLabel}</dt>
              <dd className="text-label-price text-ink">{ru.wave.total}</dd>
            </div>
          </dl>
          <p className="text-body-sm text-muted">{ru.wave.totalNote}</p>

          <p className="flex items-start gap-sm rounded-card bg-accent/20 p-md text-body-sm text-ink">
            <Icon name="info" className="mt-0.5 size-4 shrink-0" />
            {ru.wave.hold}
          </p>

          <Button fullWidth>{ru.wave.pay}</Button>
          <Button variant="secondary" fullWidth>
            {ru.wave.leave}
          </Button>
        </main>
      </div>

      <BottomNav items={navItems} activeId="orders" />
    </div>
  );
}

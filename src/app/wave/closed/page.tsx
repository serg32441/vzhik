import Link from "next/link";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

export default function WaveClosedPage() {
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

        <main className="flex flex-col px-margin pb-2xl pt-md">
          <div className="mb-md flex items-center justify-between">
            <Link
              href="/wave"
              aria-label={ru.waveClosed.back}
              className="flex size-10 items-center justify-center text-ink"
            >
              <Icon name="back" className="size-5" />
            </Link>
            <p className="text-label-md text-muted">{ru.waveClosed.placed}</p>
          </div>

          <div className="mb-lg flex flex-col gap-xs">
            <p className="flex w-fit items-center gap-xs rounded-pill bg-line px-sm py-xs text-label-md text-ink">
              <span className="size-2 rounded-pill bg-ink" />
              {ru.waveClosed.finished}
            </p>
            <h2 className="text-headline-lg text-ink">{ru.waveClosed.title}</h2>
            <p className="text-body-sm text-muted">{ru.waveClosed.subtitle}</p>
          </div>

          <Card className="flex flex-col gap-md p-lg">
            <div className="flex items-center justify-between gap-sm">
              <p className="text-label-md uppercase text-muted">{ru.waveClosed.summary}</p>
              <p className="text-label-md text-ink">{ru.waveClosed.success}</p>
            </div>
            <div className="flex items-center gap-md rounded-lg bg-canvas p-sm">
              <span className="size-14 shrink-0 rounded-lg bg-card" />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-title-md text-ink">{ru.waveClosed.name}</span>
                <span className="text-body-sm text-muted">{ru.waveClosed.amount}</span>
              </span>
              <span className="text-label-price text-ink">{ru.wave.price}</span>
            </div>
            <dl className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-md">
                <dt className="text-body-md text-muted">{ru.waveClosed.participantsLabel}</dt>
                <dd className="text-body-md text-ink">{ru.waveClosed.participants}</dd>
              </div>
              <div className="flex items-center justify-between gap-md">
                <dt className="text-body-md text-muted">{ru.waveClosed.courierLabel}</dt>
                <dd className="text-body-md text-ink">
                  {ru.waveClosed.courierPrice}{" "}
                  <span className="text-body-sm text-muted line-through">{ru.waveClosed.courierWas}</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-md pt-xs">
                <dt className="text-headline-sm text-ink">{ru.waveClosed.totalLabel}</dt>
                <dd className="text-headline-sm text-ink">{ru.wave.total}</dd>
              </div>
            </dl>
          </Card>

          <p className="px-xs pt-md text-body-sm text-muted">{ru.waveClosed.note}</p>

          <Card className="mt-md flex items-start gap-sm p-md">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
              <Icon name="bolt" className="size-4" fill="currentColor" stroke="none" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-label-lg text-ink">{ru.waveClosed.today}</span>
              <span className="text-body-sm text-muted">{ru.waveClosed.courier}</span>
            </span>
          </Card>

          <div className="mt-xl flex flex-col gap-sm">
            <Button fullWidth>
              {ru.wave.pay}
              <Icon name="arrow" className="ml-sm size-4" />
            </Button>
            <Button variant="secondary" fullWidth>
              {ru.waveClosed.details}
            </Button>
          </div>
        </main>
      </div>

      <BottomNav items={navItems} activeId="orders" />
    </div>
  );
}

import Link from "next/link";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

export default function WaveJoinedPage() {
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

        <main className="flex flex-col px-margin pb-2xl pt-sm">
          <div className="flex justify-end">
            <Link
              href="/"
              aria-label={ru.close}
              className="flex size-8 items-center justify-center rounded-pill bg-canvas text-ink"
            >
              <Icon name="close" className="size-4" />
            </Link>
          </div>

          <div className="flex flex-col items-center px-md pb-xl pt-sm text-center">
            <span className="mb-lg flex size-16 items-center justify-center rounded-pill bg-canvas text-success">
              <Icon name="check" className="size-8" />
            </span>
            <h2 className="mb-xs text-headline-lg text-ink">{ru.waveJoined.title}</h2>
            <p className="text-body-md text-muted">{ru.waveJoined.priceLine}</p>
            <p className="text-body-md text-muted">{ru.waveJoined.deliveryLine}</p>
          </div>

          <Card className="mb-2xl flex flex-col gap-md p-margin">
            <div className="flex items-center justify-between gap-sm">
              <p className="flex min-w-0 items-center gap-xs">
                <span className="shrink-0 text-label-md uppercase text-muted">{ru.wave.number}</span>
                <span className="text-body-sm text-muted">•</span>
                <span className="truncate text-title-md text-ink">{ru.waveJoined.product}</span>
              </p>
              <span className="shrink-0 text-label-price text-ink">{ru.wave.price}</span>
            </div>
            <div className="flex items-center gap-md rounded-lg bg-canvas p-sm">
              <span className="size-12 shrink-0 rounded-lg bg-card" />
              <span className="flex min-w-0 flex-col">
                <span className="text-title-md text-ink">{ru.waveJoined.piece}</span>
                <span className="text-body-sm text-muted">{ru.waveJoined.retail}</span>
              </span>
            </div>
            <ProgressBar value={93} label={ru.waveJoined.collected} />
            <div className="flex items-center justify-between gap-sm">
              <span className="text-label-lg text-ink">{ru.waveJoined.collected}</span>
              <span className="text-label-md text-muted">{ru.waveJoined.left}</span>
            </div>
            <p className="flex items-start gap-xs rounded-lg bg-canvas p-sm text-body-sm text-muted">
              <Icon name="truck" className="mt-0.5 size-4 shrink-0 text-ink" />
              {ru.waveJoined.notice}
            </p>
          </Card>

          <div className="flex flex-col gap-sm">
            <Button fullWidth href="/wave">
              {ru.waveJoined.orders}
            </Button>
            <Button variant="secondary" fullWidth href="/">
              {ru.waveJoined.catalog}
            </Button>
          </div>
        </main>
      </div>

      <BottomNav items={navItems} activeId="orders" />
    </div>
  );
}

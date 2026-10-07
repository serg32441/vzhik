import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { ru } from "@/content/ru";

const blockIcon: IconName[] = ["verified", "people", "pin"];

export default function AboutPage() {
  return (
    <div className="min-h-full bg-canvas">
      <div className="mx-auto w-full max-w-[390px]">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-sm border-b border-line bg-card px-margin">
          <Link
            href="/profile"
            aria-label={ru.about.back}
            className="flex size-10 items-center justify-center rounded-pill border border-line bg-card text-ink"
          >
            <Icon name="back" className="size-5" />
          </Link>
          <h1 className="text-title-md text-ink">{ru.about.title}</h1>
        </header>

        <main className="flex flex-col gap-md px-margin pb-2xl pt-md">
          <p className="px-xs text-body-md leading-relaxed text-muted">{ru.about.lead}</p>

          {ru.about.blocks.map((block, index) => (
            <Card key={index} className="flex flex-col gap-sm p-lg">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink">
                <Icon name={blockIcon[index] ?? "info"} className="size-5" />
              </span>
              <h2 className="text-title-md text-ink">{block.heading}</h2>
              <p className="text-body-md text-muted">{block.text}</p>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}

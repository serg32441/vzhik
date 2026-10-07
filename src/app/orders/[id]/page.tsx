import Link from "next/link";
import { notFound } from "next/navigation";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { orderCards } from "@/content/orders";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

export function generateStaticParams() {
  return orderCards.map((order) => ({ id: order.id }));
}

type OrderDetailProps = {
  params: Promise<{ id: string }>;
};

function TimelineStep({
  done,
  current,
  last,
  icon,
  title,
  meta,
  desc,
}: {
  done: boolean;
  current?: boolean;
  last?: boolean;
  icon?: "check" | "truck" | null;
  title: string;
  meta: string;
  desc?: string;
}) {
  return (
    <div className="relative flex items-start gap-md">
      {!last ? (
        <span
          aria-hidden="true"
          className={
            done
              ? "absolute left-[13px] top-[26px] bottom-0 w-0.5 bg-success"
              : "absolute left-[13px] top-[26px] bottom-0 w-0.5 bg-line"
          }
        />
      ) : null}
      <span
        className={
          done
            ? "z-10 flex size-7 shrink-0 items-center justify-center rounded-pill bg-success text-on-ink"
            : current
              ? "z-10 flex size-7 shrink-0 items-center justify-center rounded-pill bg-ink text-on-ink ring-4 ring-accent"
              : "z-10 flex size-7 shrink-0 items-center justify-center rounded-pill bg-canvas text-muted"
        }
      >
        {done ? (
          <Icon name="check" className="size-4" />
        ) : current && icon ? (
          <Icon name={icon} className="size-4" />
        ) : (
          <span className="size-2 rounded-pill bg-line" />
        )}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex items-center justify-between">
          <span className={current ? "text-headline-sm font-bold text-ink" : "text-label-lg text-ink"}>{title}</span>
          {current ? (
            <span className="rounded bg-canvas px-2 py-0.5 text-label-md font-semibold text-ink">{meta}</span>
          ) : (
            <span className="text-body-sm text-muted">{meta}</span>
          )}
        </div>
        {desc ? <span className="mt-0.5 block text-body-sm text-muted">{desc}</span> : null}
      </div>
    </div>
  );
}

function QrPattern() {
  const cells: [number, number, number, number][] = [
    // corners
    [10, 10, 40, 40], [110, 10, 40, 40], [10, 110, 40, 40], [116, 116, 24, 24],
    // data
    [58, 14, 6, 6], [70, 14, 6, 6], [82, 14, 6, 6], [94, 14, 6, 6],
    [58, 26, 18, 6], [82, 26, 6, 6], [14, 58, 6, 18], [26, 58, 18, 6],
    [58, 58, 12, 12], [76, 58, 6, 6], [88, 58, 6, 12], [110, 58, 18, 6],
    [134, 58, 6, 12], [70, 76, 12, 12], [14, 70, 6, 18], [26, 82, 6, 6],
    [38, 70, 6, 12], [58, 76, 6, 18], [88, 70, 6, 24], [100, 76, 18, 6],
    [124, 70, 6, 18], [136, 82, 6, 14], [14, 94, 18, 6], [38, 94, 6, 12],
    [70, 94, 6, 12], [100, 88, 6, 12], [112, 94, 6, 12], [130, 94, 6, 18],
    [58, 110, 6, 12], [76, 110, 6, 12], [88, 110, 6, 18], [58, 122, 6, 18],
    [70, 128, 12, 12], [88, 122, 6, 6], [100, 128, 6, 10], [58, 144, 18, 6],
    [82, 140, 6, 10], [100, 140, 12, 10],
  ];
  return (
    <svg className="size-44 text-ink" viewBox="0 0 160 160" fill="none" aria-hidden="true">
      {cells.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="currentColor" />
      ))}
    </svg>
  );
}

export default async function OrderDetailPage({ params }: OrderDetailProps) {
  const { id } = await params;
  const order = orderCards.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  const deliveredOrders = orderCards.filter((item) => item.status !== "collecting");
  const sorted = [...deliveredOrders].sort((a, b) => b.item.unitPrice - a.item.unitPrice);
  const index = Math.max(0, sorted.findIndex((item) => item.id === order.id));
  const currentOrder = sorted[index] ?? order;

  const dateToday = "12 окт, 18:04";
  const goodsTotal = currentOrder.item.count * currentOrder.item.unitPrice;
  const deliveryCost = currentOrder.item.delivery;
  const grandTotal = goodsTotal + deliveryCost;
  const totalLine = `${grandTotal.toLocaleString("ru")} ₽`;
  const goodsLine = `${goodsTotal.toLocaleString("ru")} ₽`;
  const deliveryLine = `${deliveryCost} ₽`;
  const timeline = [
    { done: true, meta: dateToday, title: ru.order.stepPaid, desc: ru.order.stepPaidDesc },
    { done: true, meta: "14 окт, 10:30", title: ru.order.stepAssembled, desc: ru.order.stepAssembledDesc },
    {
      done: false,
      current: true,
      meta: ru.order.stepInTransitToday,
      title: ru.order.stepInTransit,
      desc: `${ru.order.stepInTransitDesc} • ${ru.order.stepInTransitCourier}`,
    },
    { done: false, last: true, meta: ru.order.stepDeliveredDesc, title: ru.order.stepDelivered },
  ];

  return (
    <div className="min-h-full bg-canvas pb-nav">
      <div className="mx-auto w-full max-w-[390px]">
        <PageHeader title={ru.wave.section} />

        <main className="flex flex-col gap-md px-margin pb-2xl pt-md">
          <div className="flex items-center justify-between py-xs">
            <div className="flex items-center gap-md">
              <Link
                href="/orders"
                aria-label={ru.group.back}
                className="flex size-10 items-center justify-center rounded-pill border border-line bg-card text-ink shadow-card"
              >
                <Icon name="back" className="size-5" />
              </Link>
              <div className="flex flex-col">
                <div className="flex items-center gap-xs">
                  <span className="text-headline-sm text-ink">{ru.order.number}</span>
                  <span className="rounded-pill bg-accent px-2 py-0.5 text-label-md font-bold text-on-accent">
                    {ru.order.inTransit}
                  </span>
                </div>
                <span className="text-body-sm text-muted">{ru.order.waveNumber}</span>
              </div>
            </div>
            <button
              type="button"
              aria-label={ru.order.share}
              className="flex size-10 items-center justify-center rounded-pill border border-line bg-card text-muted"
            >
              <Icon name="share" className="size-5" />
            </button>
          </div>

          <Card className="p-lg">
            <div className="mb-lg flex items-center justify-between">
              <h2 className="text-title-md text-ink">{ru.order.statusTitle}</h2>
              <span className="text-label-md text-muted">{ru.order.updatedAgo}</span>
            </div>
            <div className="flex flex-col gap-md pl-1">
              {timeline.map((step, i) => (
                <TimelineStep
                  key={i}
                  done={step.done ?? false}
                  current={!!step.current}
                  last={!!step.last}
                  icon={step.done ? "check" : "truck"}
                  title={step.title}
                  meta={step.meta}
                  desc={step.desc}
                />
              ))}
            </div>
          </Card>

          <Card className="flex flex-col items-center p-lg text-center">
            <div className="mb-md flex w-full items-center justify-between">
              <div className="flex items-center gap-xs text-title-md text-ink">
                <Icon name="qr" className="size-5 text-ink" />
                <h2>{ru.order.qrLabel}</h2>
              </div>
              <span className="rounded bg-success/10 px-2 py-0.5 text-label-md font-semibold text-success">
                {ru.order.qrReady}
              </span>
            </div>
            <div className="my-1 inline-flex rounded-lg border border-line bg-card p-3 shadow-card">
              <QrPattern />
            </div>
            <div className="mt-sm rounded-lg bg-canvas px-4 py-2">
              <span className="text-headline-sm font-bold tracking-wider text-ink">{ru.order.qrCodeLabel}</span>
            </div>
            <p className="mt-2 text-body-sm text-muted">{ru.order.qrHint}</p>
          </Card>

          <Card className="p-lg">
            <div className="mb-md flex items-center justify-between">
              <h2 className="text-title-md text-ink">{ru.order.itemsTitle}</h2>
              <span className="text-label-md text-muted">{ru.order.itemsCount}</span>
            </div>
            <div className="flex items-center gap-md py-sm">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-canvas">
                <Icon name="box" className="size-8 text-ink" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="truncate text-title-md text-ink">{currentOrder.item.name}</h3>
                <span className="mt-0.5 text-body-sm text-muted">{currentOrder.item.quantity} • Сыроварня Север</span>
              </div>
              <span className="shrink-0 text-label-price text-ink">{currentOrder.item.price}</span>
            </div>
            <div className="my-md h-px w-full bg-line" />
            <dl className="flex flex-col gap-sm">
              <div className="flex items-center justify-between">
                <dt className="text-body-md text-muted">{ru.order.goodsLabel}</dt>
                <dd className="text-body-md text-ink">{goodsLine}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-body-md text-muted">{ru.order.deliveryLabel}</dt>
                <dd className="text-body-md text-ink">{deliveryLine}</dd>
              </div>
              <div className="flex items-center justify-between pt-xs">
                <dt className="text-headline-sm font-bold text-ink">{ru.order.totalLabel}</dt>
                <dd className="text-headline-sm font-bold text-ink">{totalLine}</dd>
              </div>
            </dl>
          </Card>

          <Card className="flex items-start gap-md p-lg">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-canvas text-ink">
              <Icon name="pin" className="size-5" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-label-lg text-ink">{ru.order.addressTitle}</span>
              <p className="mt-0.5 text-body-md text-ink">{ru.order.addressLine}</p>
              <span className="mt-0.5 block text-body-sm text-muted">{ru.order.addressExtra}</span>
            </div>
          </Card>

          <Button variant="secondary" fullWidth>
            <Icon name="flag" className="size-4 text-muted" />
            {ru.order.reportProblem}
          </Button>
        </main>
      </div>

      <BottomNav items={navItems} activeId="orders" />
    </div>
  );
}

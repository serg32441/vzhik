"use client";

import Link from "next/link";
import { useState } from "react";
import { BottomNav } from "@/components/ui/BottomNav";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { orderCards, orderStatusIcon, type OrderCard, type OrderStatus } from "@/content/orders";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

type Filter = "all" | "active" | "delivered" | "archive";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: ru.orders.filterAll },
  { id: "active", label: ru.orders.filterActive },
  { id: "delivered", label: ru.orders.filterDelivered },
  { id: "archive", label: ru.orders.filterArchive },
];

function matchesFilter(status: OrderStatus, filter: Filter): boolean {
  switch (filter) {
    case "all":
      return true;
    case "active":
      return status === "collecting" || status === "paid" || status === "in_transit";
    case "delivered":
      return status === "delivered";
    case "archive":
      return status === "delivered";
  }
}

function statusPill(status: OrderStatus, label: string) {
  if (status === "collecting") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-pill bg-accent px-2.5 py-1 text-label-md font-semibold text-on-accent">
        <span className="size-1.5 rounded-pill bg-ink" />
        {label}
      </span>
    );
  }
  if (status === "paid") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-pill bg-line px-2.5 py-1 text-label-md text-muted">
        <span className="size-1.5 rounded-pill bg-muted" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill bg-canvas px-2.5 py-1 text-label-md text-muted">
      <Icon name="check" className="size-3.5 text-muted" />
      {label}
    </span>
  );
}

function OrderCardRow({ order }: { order: OrderCard }) {
  const statusIcon = orderStatusIcon[order.status];

  return (
    <Link href={order.href}>
      <Card className="flex w-full flex-col p-lg">
        <div className="mb-sm flex items-start justify-between gap-sm">
          <div className="flex flex-col">
            <span className="text-title-md text-ink">{order.number}</span>
            <span className="text-body-sm text-muted">{order.date}</span>
          </div>
          {statusPill(order.status, order.statusLabel)}
        </div>

        <div className="flex items-center gap-md py-sm">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-canvas">
            {statusIcon ? <Icon name={statusIcon} className="size-6 text-ink" /> : null}
          </span>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-body-md text-ink">{order.item.name}</span>
            <span className="text-body-sm text-muted">{order.item.quantity}</span>
          </div>
        </div>

        <div className="mt-xs flex items-center justify-between pt-xs">
          <div className="flex items-baseline gap-xs">
            <span className="text-body-sm text-muted">{ru.orders.totalLabel}:</span>
            <span className="text-label-price text-ink">{order.total}</span>
          </div>
          <Icon name="chevron" className="size-5 -rotate-90 text-muted" />
        </div>
      </Card>
    </Link>
  );
}

function OrderCardSkeleton() {
  return (
    <div className="aspect-[3/2] w-full rounded-card bg-line/60" aria-hidden="true" />
  );
}

export default function OrdersPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = orderCards.filter((order) => matchesFilter(order.status, filter));
  const isEmpty = visible.length === 0;

  return (
    <div className="min-h-full bg-canvas pb-nav">
      <div className="mx-auto w-full max-w-[390px]">
        <PageHeader title={ru.wave.section} />

        <main className="flex flex-col px-margin pb-2xl pt-md">
          <div className="mb-md flex items-center justify-between pt-xs">
            <div className="flex items-center gap-sm">
              <h2 className="text-headline-sm text-ink">{ru.orders.title}</h2>
              <span className="inline-flex items-center justify-center rounded-pill bg-line px-2 py-0.5 text-label-md text-muted">
                {orderCards.length}
              </span>
            </div>
            <span className="text-label-md text-muted">{ru.orders.activeAndArchive}</span>
          </div>

          <div className="-mx-margin mb-md flex items-center gap-sm overflow-x-auto px-margin">
            {filters.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={
                    active
                      ? "shrink-0 whitespace-nowrap rounded-pill bg-ink px-md py-sm text-label-md text-on-ink"
                      : "shrink-0 whitespace-nowrap rounded-pill border border-line bg-card px-md py-sm text-label-md text-muted"
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {isEmpty ? (
            <div className="flex flex-col gap-md">
              {[0, 1, 2].map((i) => (
                <OrderCardSkeleton key={i} />
              ))}
              <Card className="flex flex-col items-center px-md py-2xl text-center">
                <span className="mb-xl flex size-28 items-center justify-center rounded-pill bg-canvas">
                  <div className="relative">
                    <Icon name="box" className="size-14 text-ink" />
                    <span className="absolute -bottom-0.5 -right-0.5 flex size-6 items-center justify-center rounded-pill bg-accent text-on-accent">
                      <Icon name="bolt" className="size-3.5 text-on-accent" fill="currentColor" stroke="none" />
                    </span>
                  </div>
                </span>
                <h3 className="mb-xs text-headline-md text-ink">{ru.orders.emptyTitle}</h3>
                <p className="mb-xl max-w-[260px] text-body-md text-muted">{ru.orders.emptyText}</p>
                <Link
                  href="/"
                  className="inline-flex h-12 w-full items-center justify-center gap-xs rounded-button bg-ink px-lg text-label-lg text-on-ink"
                >
                  {ru.orders.openCatalog}
                  <Icon name="arrow" className="size-4" />
                </Link>
              </Card>

              <div className="grid grid-cols-2 gap-gutter">
                <Card className="flex flex-col gap-xs p-md">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-canvas text-ink">
                    <Icon name="timer" className="size-5" />
                  </span>
                  <span className="mt-xs text-title-md text-ink">{ru.orders.perkTimeTitle}</span>
                  <span className="text-body-sm text-muted">{ru.orders.perkTimeText}</span>
                </Card>
                <Card className="flex flex-col gap-xs p-md">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-canvas text-ink">
                    <Icon name="truck" className="size-5" />
                  </span>
                  <span className="mt-xs text-title-md text-ink">{ru.orders.perkFreeTitle}</span>
                  <span className="text-body-sm text-muted">{ru.orders.perkFreeText}</span>
                </Card>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-md">
                {visible.map((order) => (
                  <OrderCardRow key={order.id} order={order} />
                ))}
              </div>

              <Card className="mt-md flex items-center justify-between gap-md p-lg">
                <div className="flex min-w-0 items-center gap-md">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-canvas text-ink">
                    <Icon name="chat" className="size-5" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-label-lg text-ink">{ru.orders.helpTitle}</span>
                    <span className="truncate text-body-sm text-muted">{ru.orders.helpText}</span>
                  </div>
                </div>
                <span className="shrink-0 text-label-md text-ink">{ru.orders.helpAction}</span>
              </Card>
            </>
          )}
        </main>
      </div>

      <BottomNav items={navItems} activeId="orders" />
    </div>
  );
}

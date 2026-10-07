"use client";

import { useState } from "react";
import { BottomNav } from "@/components/ui/BottomNav";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/Input";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Tabs } from "@/components/ui/Tabs";
import { ru } from "@/content/ru";

const tabs = [
  { id: "milk", label: ru.categories.milk },
  { id: "cheese", label: ru.categories.cheese },
  { id: "curd", label: ru.categories.curd },
];

const navItems = [
  { id: "catalog", label: ru.nav.catalog, icon: "grid" as const },
  { id: "orders", label: ru.nav.orders, icon: "receipt" as const },
  { id: "profile", label: ru.nav.profile, icon: "person" as const },
];

export default function UiKitPage() {
  const [tab, setTab] = useState(tabs[0].id);
  const [nav, setNav] = useState(navItems[0].id);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="min-h-full bg-canvas pb-nav">
      <main className="mx-auto flex w-full max-w-[390px] flex-col gap-xl px-margin py-xl">
        <header className="flex flex-col gap-xs">
          <p className="text-label-md text-muted">{ru.brand}</p>
          <h1 className="text-headline-lg text-ink">{ru.nav.catalog}</h1>
        </header>

        <section className="flex flex-col gap-sm">
          <h2 className="text-headline-sm text-ink">{ru.kit.buttons}</h2>
          <Button fullWidth>{ru.product.joinWave}</Button>
          <Button variant="accent" fullWidth>
            {ru.home.deliveryBanner}
          </Button>
          <Button variant="secondary" fullWidth>
            {ru.wave.leave}
          </Button>
          <Button disabled fullWidth>
            {ru.wave.pay}
          </Button>
        </section>

        <section className="flex flex-col gap-sm">
          <h2 className="text-headline-sm text-ink">{ru.kit.card}</h2>
          <Card className="flex flex-col gap-xs p-md">
            <p className="text-title-md text-ink">{ru.home.freshnessTitle}</p>
            <p className="text-body-sm text-muted">{ru.home.freshnessText}</p>
          </Card>
        </section>

        <section className="flex flex-col gap-sm">
          <h2 className="text-headline-sm text-ink">{ru.kit.tabs}</h2>
          <Tabs tabs={tabs} value={tab} onChange={setTab} />
        </section>

        <section className="flex flex-col gap-md">
          <h2 className="text-headline-sm text-ink">{ru.kit.progress}</h2>
          <ProgressBar value={0} label={ru.product.progressCount} />
          <ProgressBar value={40} label={ru.product.neighborsLeft} />
          <div className="flex flex-col gap-xs">
            <ProgressBar value={100} label={ru.wave.delivered} />
            <p className="text-body-sm text-success">{ru.wave.delivered}</p>
          </div>
        </section>

        <section className="flex flex-col gap-sm">
          <h2 className="text-headline-sm text-ink">{ru.kit.field}</h2>
          <Input placeholder={ru.home.searchPlaceholder} />
          <Input defaultValue={ru.home.address} />
          <Input invalid defaultValue={ru.home.address} />
        </section>

        <section className="flex flex-col gap-sm">
          <h2 className="text-headline-sm text-ink">{ru.kit.categories}</h2>
          <div className="grid grid-cols-2 gap-gutter">
            <CategoryCard name={ru.categories.dairy} icon={<Icon name="drop" />} />
            <CategoryCard name={ru.categories.eggs} icon={<Icon name="egg" />} />
          </div>
        </section>

        <section className="flex flex-col gap-sm">
          <h2 className="text-headline-sm text-ink">{ru.kit.product}</h2>
          <ProductCard
            weight={ru.product.weight}
            name={ru.product.name}
            price={ru.product.ourPrice}
            deliveryFrom={ru.product.deliveryFrom}
            progress={40}
            progressLabel={ru.product.neighborsLeft}
            onOpen={() => setSheetOpen(true)}
          />
        </section>
      </main>

      <BottomNav items={navItems} activeId={nav} onChange={setNav} />

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} closeLabel={ru.close}>
        <div className="flex flex-col gap-md">
          <div className="flex flex-col gap-xs">
            <h2 className="text-headline-md text-ink">{ru.product.fullName}</h2>
            <p className="text-body-md text-muted">{ru.product.producer}</p>
          </div>
          <div className="grid grid-cols-3 gap-sm">
            <p className="flex flex-col gap-xs text-body-sm text-muted">
              {ru.product.storePriceLabel}
              <span className="text-label-price text-muted line-through">{ru.product.storePrice}</span>
            </p>
            <p className="flex flex-col gap-xs text-body-sm text-muted">
              {ru.product.ourPriceLabel}
              <span className="text-label-price text-ink">{ru.product.ourPrice}</span>
            </p>
            <p className="flex flex-col gap-xs text-body-sm text-muted">
              {ru.product.deliveryLabel}
              <span className="text-label-price text-ink">{ru.product.deliveryAmount}</span>
            </p>
          </div>
          <p className="text-body-sm text-muted">{ru.product.wholesaleNote}</p>
          <div className="flex flex-col gap-xs">
            <p className="text-body-md text-ink">{ru.product.neighborsLeft}</p>
            <ProgressBar value={40} label={ru.product.progressCount} />
            <p className="text-label-md text-muted">{ru.product.progressCount}</p>
          </div>
          <Button fullWidth onClick={() => setSheetOpen(false)}>
            {ru.product.joinWave}
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
}

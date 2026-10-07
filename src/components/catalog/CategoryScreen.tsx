"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BottomNav } from "@/components/ui/BottomNav";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Tabs } from "@/components/ui/Tabs";
import { homeCategories } from "@/content/catalog";
import { navItems } from "@/content/nav";
import { dairyProducts, dairyTabs } from "@/content/products";
import { ru } from "@/content/ru";

type CategoryScreenProps = {
  categoryId: string;
};

export function CategoryScreen({ categoryId }: CategoryScreenProps) {
  const category = homeCategories.find((item) => item.id === categoryId);
  const router = useRouter();
  const [tab, setTab] = useState<string>(dairyTabs[0].id);
  const [openId, setOpenId] = useState<string | null>(null);

  if (!category) {
    return null;
  }

  const isDairy = category.id === "dairy";
  const products = isDairy ? dairyProducts.filter((product) => product.tabId === tab) : [];
  const opened = dairyProducts.find((product) => product.id === openId) ?? null;

  return (
    <div className="min-h-full bg-canvas pb-nav">
      <div className="mx-auto w-full max-w-[390px]">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-card px-margin">
          <div className="flex items-center gap-sm">
            <span className="text-headline-md uppercase text-ink">{ru.brand}</span>
            <span className="text-body-sm text-muted">/</span>
            <p className="text-title-md text-ink">{ru.nav.catalog}</p>
          </div>
          <div className="flex size-8 items-center justify-center rounded-pill bg-ink text-on-ink" aria-hidden="true">
            <Icon name="person" className="size-4" />
          </div>
        </header>

        <main className="flex flex-col px-margin pb-2xl pt-md">
          <div className="mb-md flex items-center gap-sm">
            <Link
              href="/"
              aria-label={ru.group.back}
              className="flex size-10 shrink-0 items-center justify-center rounded-pill border border-line bg-card text-ink shadow-card"
            >
              <Icon name="back" className="size-5" />
            </Link>
            <div className="flex min-w-0 flex-col">
              <h1 className="text-headline-md text-ink">{category.name}</h1>
              {isDairy ? <p className="text-body-sm text-muted">{ru.group.dairyNote}</p> : null}
            </div>
          </div>

          {isDairy ? (
            <>
              <div className="mb-md">
                <Tabs tabs={[...dairyTabs]} value={tab} onChange={setTab} />
              </div>
              <Card className="mb-md flex items-center justify-between gap-sm p-sm">
                <span className="flex min-w-0 items-center gap-sm">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
                    <Icon name="people" className="size-4" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-label-md text-ink">{ru.group.jointTitle}</span>
                    <span className="text-body-sm text-muted">{ru.group.jointText}</span>
                  </span>
                </span>
                <span className="shrink-0 text-label-md text-ink">{ru.group.jointDiscount}</span>
              </Card>
              <div className="grid grid-cols-2 gap-gutter">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    weight={product.weight}
                    name={product.name}
                    price={product.price}
                    deliveryFrom={product.deliveryFrom}
                    progress={product.progress}
                    progressLabel={product.progressLabel}
                    onOpen={() => setOpenId(product.id)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </main>
      </div>

      <BottomNav items={navItems} activeId="catalog" />

      <BottomSheet open={opened !== null} onClose={() => setOpenId(null)} closeLabel={ru.close}>
        {opened ? (
          <div className="flex flex-col gap-md">
            <h2 className="text-headline-md text-ink">{opened.fullName}</h2>
            <p className="flex flex-col gap-xs text-body-sm text-muted">
              {ru.product.ourPriceLabel}
              <span className="text-label-price text-ink">{opened.price}</span>
            </p>
            <p className="text-body-sm text-muted">{opened.deliveryFrom}</p>
            <p className="text-body-sm text-muted">{ru.product.wholesaleNote}</p>
            <div className="flex flex-col gap-xs">
              <p className="text-body-md text-ink">{opened.progressLabel}</p>
              <ProgressBar value={opened.progress} label={opened.progressLabel} />
            </div>
            <Button fullWidth onClick={() => router.push("/wave/joined")}>
              {ru.product.joinWave}
            </Button>
          </div>
        ) : null}
      </BottomSheet>
    </div>
  );
}

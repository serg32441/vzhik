"use client";

import Link from "next/link";
import { useState } from "react";
import { BottomNav } from "@/components/ui/BottomNav";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/Input";
import { homeCategories } from "@/content/catalog";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

const houses = ru.addressSheet.houses;

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [addressQuery, setAddressQuery] = useState("");
  const [confirmedId, setConfirmedId] = useState<string>(houses[0].id);
  const [draftId, setDraftId] = useState<string>(houses[0].id);

  const confirmed = houses.find((house) => house.id === confirmedId) ?? houses[0];
  const needle = query.trim().toLocaleLowerCase("ru");
  const visibleCategories = homeCategories.filter((category) =>
    category.name.toLocaleLowerCase("ru").includes(needle),
  );
  const addressNeedle = addressQuery.trim().toLocaleLowerCase("ru");
  const visibleHouses = houses.filter((house) =>
    house.line.toLocaleLowerCase("ru").includes(addressNeedle),
  );

  function openSheet() {
    setDraftId(confirmedId);
    setAddressQuery("");
    setSheetOpen(true);
  }

  function confirmAddress() {
    setConfirmedId(draftId);
    setSheetOpen(false);
  }

  return (
    <div className="min-h-full bg-canvas pb-nav">
      <div className="mx-auto w-full max-w-[390px]">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-card px-margin">
          <div className="flex items-center gap-sm">
            <span className="text-headline-md uppercase text-ink">{ru.brand}</span>
            <span className="text-body-sm text-muted">/</span>
            <h1 className="text-title-md text-ink">{ru.nav.catalog}</h1>
          </div>
          <div className="flex size-8 items-center justify-center rounded-pill bg-ink text-on-ink" aria-hidden="true">
            <Icon name="person" className="size-4" />
          </div>
        </header>

        <main className="flex flex-col px-margin pb-2xl pt-sm">
          <div className="mb-md flex items-center justify-between gap-sm py-sm">
            <p className="flex shrink-0 items-center gap-xs whitespace-nowrap text-headline-sm uppercase text-ink">
              <Icon name="bolt" className="size-5 shrink-0 text-accent" fill="currentColor" stroke="none" />
              {ru.home.deliveryBanner}
            </p>
            <button
              type="button"
              onClick={openSheet}
              className="flex min-w-0 max-w-32 items-center gap-xs rounded-pill border border-line bg-card px-sm py-sm text-label-md text-ink shadow-card"
            >
              <Icon name="pin" className="size-4 shrink-0 text-muted" />
              <span className="truncate">{confirmed.line}</span>
              <Icon name="chevron" className="size-4 shrink-0 text-muted" />
              <span className="sr-only">{ru.home.chooseHome}</span>
            </button>
          </div>

          <div className="relative mb-lg">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-md text-muted">
              <Icon name="search" className="size-5" />
            </span>
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={ru.home.searchPlaceholder}
              className="pl-11"
            />
          </div>

          <section className="mb-xl rounded-card bg-ink p-lg text-on-ink">
            <div className="mb-sm flex items-center justify-between">
              <span className="rounded-md bg-accent px-sm py-xs text-label-md uppercase text-on-accent">
                {ru.home.benefit}
              </span>
              <Icon name="people" className="size-5 text-accent" />
            </div>
            <h2 className="mb-sm text-headline-sm text-on-ink">{ru.home.chooseHome}</h2>
            <ul className="flex flex-col gap-sm">
              <li className="flex items-start gap-sm text-body-md">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent" />
                {ru.home.fixedPrice}
              </li>
              <li className="flex items-start gap-sm text-body-md">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent" />
                {ru.home.deliveryGetsCheaper}
              </li>
            </ul>
          </section>

          <div className="mb-md flex items-baseline justify-between">
            <h2 className="text-headline-sm text-ink">{ru.home.categories}</h2>
            <p className="text-body-sm text-muted">{ru.home.sectionCount}</p>
          </div>

          <div className="grid grid-cols-2 gap-gutter">
            {visibleCategories.map((category) => (
              <Link key={category.id} href={`/c/${category.id}`} className="block">
                <CategoryCard layout="stack" name={category.name} icon={<Icon name={category.icon} />} />
              </Link>
            ))}
          </div>

          <Card className="mt-xl flex items-center gap-md p-lg">
            <Icon name="verified" className="size-6 shrink-0 text-ink" />
            <div className="flex flex-col gap-xs">
              <p className="text-title-md text-ink">{ru.home.freshnessTitle}</p>
              <p className="text-body-sm text-muted">{ru.home.freshnessText}</p>
            </div>
          </Card>
        </main>
      </div>

      <BottomNav items={navItems} activeId="catalog" />

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} closeLabel={ru.close}>
        <div className="flex flex-col gap-md">
          <div className="flex flex-col gap-xs">
            <h2 className="text-headline-sm text-ink">{ru.addressSheet.title}</h2>
            <p className="text-body-sm text-muted">{ru.addressSheet.subtitle}</p>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-md text-muted">
              <Icon name="search" className="size-5" />
            </span>
            <Input
              value={addressQuery}
              onChange={(event) => setAddressQuery(event.target.value)}
              placeholder={ru.addressSheet.searchPlaceholder}
              className="pl-11"
            />
          </div>

          <fieldset className="flex flex-col gap-sm">
            <legend className="sr-only">{ru.addressSheet.title}</legend>
            {visibleHouses.map((house) => {
              const selected = house.id === draftId;
              return (
                <label
                  key={house.id}
                  className={
                    selected
                      ? "flex items-center gap-md rounded-card bg-canvas p-md"
                      : "flex items-center gap-md rounded-card border border-line bg-card p-md"
                  }
                >
                  <input
                    type="radio"
                    name="home"
                    className="sr-only"
                    checked={selected}
                    onChange={() => setDraftId(house.id)}
                  />
                  <span
                    className={
                      selected
                        ? "flex size-5 shrink-0 items-center justify-center rounded-pill bg-ink text-on-ink"
                        : "flex size-5 shrink-0 rounded-pill border border-line"
                    }
                  >
                    {selected ? <Icon name="check" className="size-3" /> : null}
                  </span>
                  <span className="flex min-w-0 flex-col gap-xs">
                    <span className="flex items-center gap-sm">
                      <span className="truncate text-title-md text-ink">{house.line}</span>
                      {house.here ? (
                        <span className="shrink-0 rounded-pill bg-accent px-sm py-xs text-label-md text-on-accent">
                          {ru.addressSheet.youAreHere}
                        </span>
                      ) : null}
                    </span>
                    <span className="flex items-center gap-xs text-body-sm text-muted">
                      <Icon name="people" className="size-4 shrink-0" />
                      {house.neighbors}
                    </span>
                  </span>
                </label>
              );
            })}
          </fieldset>

          <p className="flex items-center gap-sm rounded-card bg-accent/20 p-md text-body-sm text-ink">
            <Icon name="bolt" className="size-5 shrink-0 text-ink" fill="currentColor" stroke="none" />
            <span>
              {ru.addressSheet.courierLead}{" "}
              <span className="font-semibold">{ru.addressSheet.courierTime}</span>
            </span>
          </p>

          <Button fullWidth onClick={confirmAddress}>
            {ru.addressSheet.choose}
            <Icon name="arrow" className="ml-sm size-4" />
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
}

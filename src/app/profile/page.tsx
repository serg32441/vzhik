import Link from "next/link";
import { BottomNav } from "@/components/ui/BottomNav";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { navItems } from "@/content/nav";
import { ru } from "@/content/ru";

const menuRoutes: Record<string, string> = {
  orders: "/orders",
  address: "/",
  about: "/about",
  contacts: "/contacts",
};

const menuIcon: Record<string, IconName> = {
  orders: "receipt",
  address: "pin",
  about: "info",
  contacts: "chat",
};

export default function ProfilePage() {
  return (
    <div className="min-h-full bg-canvas pb-nav">
      <div className="mx-auto w-full max-w-[390px]">
        <PageHeader title={ru.profile.title} />

        <main className="flex flex-col gap-md px-margin pb-2xl pt-md">
          <Card className="flex items-center gap-md p-lg">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-pill bg-ink text-on-ink">
              <Icon name="person" className="size-8" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate text-headline-sm text-ink">{ru.profile.name}</span>
              <span className="text-body-sm text-muted">{ru.profile.phone}</span>
              <span className="truncate text-body-sm text-muted">{ru.profile.email}</span>
            </div>
          </Card>

          <Card className="flex items-center gap-md p-lg">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-canvas text-ink">
              <Icon name="pin" className="size-5" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-label-md text-muted">{ru.profile.homeLabel}</span>
              <span className="text-title-md text-ink">{ru.profile.home}</span>
            </div>
          </Card>

          <div className="flex flex-col overflow-hidden rounded-card border border-line bg-card shadow-card">
            {ru.profile.items.map((item, index) => {
              const href = menuRoutes[item.id];
              const icon = menuIcon[item.id];
              return (
                <Link
                  key={item.id}
                  href={href ?? "/"}
                  className={
                    "flex items-center gap-sm px-lg py-md " +
                    (index > 0 ? "border-t border-line" : "")
                  }
                >
                  {icon ? <Icon name={icon} className="size-5 shrink-0 text-muted" /> : null}
                  <span className="flex-1 text-body-md text-ink">{item.label}</span>
                  <Icon name="chevron" className="size-5 -rotate-90 text-muted" />
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="mt-xs inline-flex h-12 w-full items-center justify-center rounded-button border border-line bg-card text-label-lg text-danger"
          >
            {ru.profile.logout}
          </button>
        </main>
      </div>

      <BottomNav items={navItems} activeId="profile" />
    </div>
  );
}

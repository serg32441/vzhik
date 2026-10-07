import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { ru } from "@/content/ru";

const methodIcon: Record<string, IconName> = {
  chat: "chat",
  phone: "phone",
  email: "mail",
};

export default function ContactsPage() {
  return (
    <div className="min-h-full bg-canvas">
      <div className="mx-auto w-full max-w-[390px]">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-sm border-b border-line bg-card px-margin">
          <Link
            href="/profile"
            aria-label={ru.contacts.back}
            className="flex size-10 items-center justify-center rounded-pill border border-line bg-card text-ink"
          >
            <Icon name="back" className="size-5" />
          </Link>
          <h1 className="text-title-md text-ink">{ru.contacts.title}</h1>
        </header>

        <main className="flex flex-col gap-md px-margin pb-2xl pt-md">
          <Card className="flex items-center gap-md p-lg">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-pill bg-canvas text-ink">
              <Icon name="chat" className="size-5" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-title-md text-ink">{ru.contacts.supportTitle}</span>
              <span className="text-body-sm text-muted">{ru.contacts.supportText}</span>
            </div>
          </Card>

          <div className="flex flex-col overflow-hidden rounded-card border border-line bg-card shadow-card">
            {ru.contacts.methods.map((method, index) => {
              const icon = methodIcon[method.id];
              return (
                <div
                  key={method.id}
                  className={
                    "flex items-center gap-sm px-lg py-md " +
                    (index > 0 ? "border-t border-line" : "")
                  }
                >
                  {icon ? <Icon name={icon} className="size-5 shrink-0 text-muted" /> : null}
                  <span className="flex-1 text-body-md text-ink">{method.label}</span>
                  <span className="text-label-md text-muted">{method.value}</span>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

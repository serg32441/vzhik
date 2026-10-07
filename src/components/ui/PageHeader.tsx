import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icons";
import { ru } from "@/content/ru";

type PageHeaderProps = {
  title: string;
  action?: ReactNode;
};

export function PageHeader({ title, action }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-card px-margin">
      <div className="flex items-center gap-sm">
        <span className="text-headline-md uppercase text-ink">{ru.brand}</span>
        <span className="text-body-sm text-muted">/</span>
        <h1 className="text-title-md text-ink">{title}</h1>
      </div>
      {action ?? (
        <div className="flex size-8 items-center justify-center rounded-pill bg-ink text-on-ink" aria-hidden="true">
          <Icon name="person" className="size-4" />
        </div>
      )}
    </header>
  );
}

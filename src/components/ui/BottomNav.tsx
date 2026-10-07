"use client";

import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons";

export type BottomNavItem = {
  id: string;
  label: string;
  icon: IconName;
  href?: string;
};

type BottomNavProps = {
  items: BottomNavItem[];
  activeId: string;
  onChange?: (id: string) => void;
};

export function BottomNav({ items, activeId, onChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto flex h-nav w-full max-w-[390px] border-t border-line bg-card">
      {items.map((item) => {
        const active = item.id === activeId;
        const className = active
          ? "flex flex-1 flex-col items-center justify-center gap-xs text-label-md text-ink"
          : "flex flex-1 flex-col items-center justify-center gap-xs text-label-md text-muted";
        const content = (
          <>
            <Icon name={item.icon} />
            {item.label}
          </>
        );

        if (item.href) {
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={className}
            >
              {content}
            </Link>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange?.(item.id)}
            aria-current={active ? "page" : undefined}
            className={className}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}

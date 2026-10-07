import type { IconName } from "@/components/ui/icons";
import { ru } from "@/content/ru";

export type NavItem = {
  id: string;
  label: string;
  icon: IconName;
  href?: string;
};

export const navItems: NavItem[] = [
  { id: "catalog", label: ru.nav.catalog, icon: "grid", href: "/" },
  { id: "orders", label: ru.nav.orders, icon: "receipt", href: "/orders" },
  { id: "profile", label: ru.nav.profile, icon: "person", href: "/profile" },
];

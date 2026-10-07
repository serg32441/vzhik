import type { IconName } from "@/components/ui/icons";
import { ru } from "@/content/ru";

export type OrderStatus = "collecting" | "paid" | "delivered" | "in_transit";

export type OrderItem = {
  id: string;
  name: string;
  weight: string;
  quantity: string;
  /** Товаров в заказе (для деталей) */
  count: number;
  /** Цена за единицу в рублях (для деталей) */
  unitPrice: number;
  /** Отображаемая цена позиции */
  price: string;
  delivery: number;
};

export type OrderCard = {
  id: string;
  number: string;
  waveNumber: string;
  date: string;
  status: OrderStatus;
  statusLabel: string;
  item: OrderItem;
  total: string;
  href: string;
};

export const orderStatusIcon: Record<OrderStatus, IconName | null> = {
  collecting: null,
  paid: null,
  delivered: "check",
  in_transit: "truck",
};

export const orderCards: OrderCard[] = [
  {
    id: "o-4928",
    number: ru.wave.number,
    waveNumber: "Волна #4928",
    date: "12 октября",
    status: "collecting",
    statusLabel: ru.wave.status,
    item: {
      id: "cheese-gouda",
      name: "Сыр Гауда 45%, 400 г",
      weight: "400 г",
      quantity: "1 шт.",
      count: 1,
      unitPrice: 289,
      price: ru.wave.price,
      delivery: 62,
    },
    total: ru.wave.total,
    href: "/wave",
  },
  {
    id: "o-4891",
    number: "Волна #4891",
    waveNumber: "Волна #4891",
    date: "8 октября",
    status: "paid",
    statusLabel: "Оплачен",
    item: {
      id: "milk-32",
      name: "Молоко цельное 3,2%, 1 л",
      weight: "1 л",
      quantity: "3 шт.",
      count: 3,
      unitPrice: 89,
      price: "89 ₽",
      delivery: 50,
    },
    total: "317 ₽",
    href: "/orders/o-4891",
  },
  {
    id: "o-4720",
    number: "Волна #4720",
    waveNumber: "Волна #4720",
    date: "28 сентября",
    status: "delivered",
    statusLabel: "Доставлен",
    item: {
      id: "curd-farm",
      name: "Творог фермерский 9%, 400 г",
      weight: "400 г",
      quantity: "2 шт.",
      count: 2,
      unitPrice: 165,
      price: "165 ₽",
      delivery: 50,
    },
    total: "380 ₽",
    href: "/orders/o-4720",
  },
];


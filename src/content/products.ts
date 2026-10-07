import { ru } from "@/content/ru";

export type CatalogProduct = {
  id: string;
  categoryId: string;
  tabId: string;
  weight: string;
  name: string;
  fullName: string;
  price: string;
  deliveryFrom: string;
  progress: number;
  progressLabel: string;
};

export const dairyTabs = [
  { id: "milk", label: ru.categories.milk },
  { id: "cheese", label: ru.categories.cheese },
  { id: "curd", label: ru.categories.curd },
  { id: "yogurt", label: ru.categories.yogurt },
  { id: "butter", label: ru.categories.butter },
  { id: "cream", label: ru.categories.cream },
  { id: "sour", label: ru.categories.sour },
] as const;

export const dairyProducts: CatalogProduct[] = [
  {
    id: "milk-32",
    categoryId: "dairy",
    tabId: "milk",
    weight: "1 л",
    name: "Молоко цельное 3,2%",
    fullName: "Молоко цельное 3,2%, 1 л",
    price: "89 ₽",
    deliveryFrom: ru.product.deliveryFrom,
    progress: 70,
    progressLabel: "Собрано 21 из 30",
  },
  {
    id: "cheese-russian",
    categoryId: "dairy",
    tabId: "cheese",
    weight: "300 г",
    name: "Сыр Российский 50%",
    fullName: "Сыр Российский 50%, 300 г",
    price: "245 ₽",
    deliveryFrom: ru.product.deliveryFrom,
    progress: 60,
    progressLabel: "Собрано 18 из 30",
  },
  {
    id: "curd-farm",
    categoryId: "dairy",
    tabId: "curd",
    weight: "400 г",
    name: "Творог фермерский 9%",
    fullName: "Творог фермерский 9%, 400 г",
    price: "165 ₽",
    deliveryFrom: ru.product.deliveryFrom,
    progress: 90,
    progressLabel: "Собрано 27 из 30",
  },
  {
    id: "yogurt-greek",
    categoryId: "dairy",
    tabId: "yogurt",
    weight: "250 г",
    name: "Йогурт греческий натуральный",
    fullName: "Йогурт греческий натуральный, 250 г",
    price: "72 ₽",
    deliveryFrom: ru.product.deliveryFrom,
    progress: 40,
    progressLabel: "Собрано 12 из 30",
  },
  {
    id: "butter-825",
    categoryId: "dairy",
    tabId: "butter",
    weight: "180 г",
    name: "Масло сливочное 82,5%",
    fullName: "Масло сливочное 82,5%, 180 г",
    price: "189 ₽",
    deliveryFrom: ru.product.deliveryFrom,
    progress: 97,
    progressLabel: "Собрано 29 из 30",
  },
  {
    id: "sour-20",
    categoryId: "dairy",
    tabId: "sour",
    weight: "300 г",
    name: "Сметана 20%",
    fullName: "Сметана 20%, 300 г",
    price: "98 ₽",
    deliveryFrom: ru.product.deliveryFrom,
    progress: 50,
    progressLabel: "Собрано 15 из 30",
  },
];

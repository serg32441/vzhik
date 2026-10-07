import type { IconName } from "@/components/ui/icons";
import { ru } from "@/content/ru";

export const homeCategories: { id: string; name: string; icon: IconName }[] = [
  { id: "meat", name: ru.categories.meat, icon: "meat" },
  { id: "sausage", name: ru.categories.sausage, icon: "sausage" },
  { id: "fish", name: ru.categories.fish, icon: "fish" },
  { id: "dairy", name: ru.categories.dairy, icon: "drop" },
  { id: "produce", name: ru.categories.produce, icon: "produce" },
  { id: "eggs", name: ru.categories.eggs, icon: "egg" },
  { id: "grocery", name: ru.categories.grocery, icon: "grain" },
  { id: "spice", name: ru.categories.spice, icon: "spice" },
  { id: "preserves", name: ru.categories.preserves, icon: "jar" },
  { id: "bread", name: ru.categories.bread, icon: "bread" },
  { id: "sweets", name: ru.categories.sweets, icon: "cake" },
  { id: "frozen", name: ru.categories.frozen, icon: "snow" },
  { id: "nuts", name: ru.categories.nuts, icon: "nut" },
  { id: "tea", name: ru.categories.tea, icon: "coffee" },
  { id: "drinks", name: ru.categories.drinks, icon: "drink" },
  { id: "baby", name: ru.categories.baby, icon: "baby" },
  { id: "pet", name: ru.categories.pet, icon: "pet" },
  { id: "household", name: ru.categories.household, icon: "clean" },
];

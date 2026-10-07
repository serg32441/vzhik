import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

type CategoryCardProps = {
  name: string;
  icon: ReactNode;
  layout?: "row" | "stack";
};

export function CategoryCard({ name, icon, layout = "row" }: CategoryCardProps) {
  if (layout === "stack") {
    return (
      <Card className="flex min-h-28 flex-col justify-between p-md">
        <span className="flex size-9 items-center justify-center rounded-lg bg-canvas text-ink">
          {icon}
        </span>
        <span className="text-title-md text-ink">{name}</span>
      </Card>
    );
  }

  return (
    <Card className="flex items-center gap-sm p-md">
      <span className="text-ink">{icon}</span>
      <span className="text-title-md text-ink">{name}</span>
    </Card>
  );
}

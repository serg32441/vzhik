import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

type ProductCardProps = {
  weight: string;
  name: string;
  price: string;
  deliveryFrom: string;
  progress: number;
  progressLabel?: string;
  photo?: ReactNode;
  onOpen: () => void;
};

export function ProductCard({
  weight,
  name,
  price,
  deliveryFrom,
  progress,
  progressLabel,
  photo,
  onOpen,
}: ProductCardProps) {
  return (
    <Card className="p-md">
      <button type="button" onClick={onOpen} className="flex w-full flex-col gap-xs text-left">
        <span className="flex aspect-square w-full items-center justify-center bg-card">
          {photo}
        </span>
        <span className="text-body-sm text-muted">{weight}</span>
        <span className="text-title-md text-ink">{name}</span>
        <span className="text-label-price text-ink">{price}</span>
        <span className="text-body-sm text-muted">{deliveryFrom}</span>
        {progressLabel ? <span className="text-body-sm text-muted">{progressLabel}</span> : null}
        <ProgressBar value={progress} label={progressLabel ?? deliveryFrom} />
      </button>
    </Card>
  );
}

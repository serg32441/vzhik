import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  const classes = [
    "rounded-card border border-line bg-card shadow-card",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}

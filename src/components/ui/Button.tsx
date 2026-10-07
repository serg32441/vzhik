import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  href?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-ink text-on-ink active:bg-pressed",
  accent: "bg-accent text-on-accent",
  secondary: "border border-line bg-card text-ink",
};

export function Button({
  variant = "primary",
  fullWidth = false,
  className,
  type = "button",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex h-control items-center justify-center rounded-button px-lg text-label-lg",
    variantClass[variant],
    fullWidth ? "w-full" : "",
    "disabled:opacity-40",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children as ReactNode}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

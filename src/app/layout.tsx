import type { Metadata } from "next";
import type { ReactNode } from "react";
import { interCyrillic, interLatin, interLatinExt } from "@/fonts/inter";
import { ru } from "@/content/ru";
import "./globals.css";

export const metadata: Metadata = {
  title: ru.brand,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${interLatin.variable} ${interLatinExt.variable} ${interCyrillic.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}

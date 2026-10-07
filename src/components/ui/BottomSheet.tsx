"use client";

import { useEffect, type ReactNode } from "react";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  children: ReactNode;
};

export function BottomSheet({ open, onClose, closeLabel, children }: BottomSheetProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 flex max-h-[85dvh] w-full max-w-[390px] flex-col overflow-hidden rounded-t-sheet bg-card pt-sm shadow-sheet"
      >
        <div className="mx-auto mb-md h-1 w-10 shrink-0 rounded-pill bg-line" />
        <div className="overflow-y-auto px-margin pb-xl">{children}</div>
      </div>
    </div>
  );
}

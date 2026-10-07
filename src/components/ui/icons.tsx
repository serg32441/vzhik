import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "grid"
  | "receipt"
  | "person"
  | "drop"
  | "egg"
  | "bolt"
  | "pin"
  | "chevron"
  | "arrow"
  | "back"
  | "search"
  | "check"
  | "people"
  | "verified"
  | "info"
  | "truck"
  | "close"
  | "meat"
  | "sausage"
  | "fish"
  | "produce"
  | "grain"
  | "spice"
  | "jar"
  | "bread"
  | "cake"
  | "snow"
  | "nut"
  | "coffee"
  | "drink"
  | "baby"
  | "pet"
  | "clean"
  | "mail"
  | "phone"
  | "box"
  | "timer"
  | "flag"
  | "qr"
  | "share"
  | "chat"
  | "settings"
  | "back-inline";

const shapes: Record<IconName, ReactNode> = {
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  receipt: (
    <>
      <path d="M7 3.5h10v17l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5V3.5z" />
      <path d="M9.5 8h5M9.5 12h5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 19.5c1.2-2.8 3.1-4 5.5-4s4.3 1.2 5.5 4" />
    </>
  ),
  drop: <path d="M12 3.5s5.5 6 5.5 9.2a5.5 5.5 0 1 1-11 0C6.5 9.5 12 3.5 12 3.5z" />,
  egg: <path d="M12 20.5c3.2 0 5.5-3.2 5.5-7.2C17.5 8 15 3.5 12 3.5S6.5 8 6.5 13.3c0 4 2.3 7.2 5.5 7.2z" />,
  bolt: <path d="M13 2.5 5.5 13.5H11L10 21.5 18.5 10H13.2L13 2.5z" />,
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  arrow: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
  back: <path d="M19 12H5M11 6 5 12l6 6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m15.5 15.5 4.5 4.5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  people: (
    <>
      <circle cx="9" cy="8.5" r="2.2" />
      <circle cx="15.5" cy="9.2" r="1.7" />
      <path d="M4.8 18.5c.7-2.3 2.2-3.4 4.2-3.4s3.5 1.1 4.2 3.4" />
      <path d="M13.2 15.4c1.3-.4 2.6.1 3.6 1.4.6.8 1 1.6 1.2 2.2" />
    </>
  ),
  verified: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.2 2.5 2.5 4.8-5.2" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </>
  ),
  truck: (
    <>
      <path d="M3.5 8.5h11v7h-11z" />
      <path d="M14.5 11h3.2L20.5 13.5V15.5h-6" />
      <circle cx="7.5" cy="17" r="1.4" />
      <circle cx="16.5" cy="17" r="1.4" />
    </>
  ),
  close: <path d="M7 7l10 10M17 7 7 17" />,
  mail: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </>
  ),
  phone: <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2z" />,
  box: (
    <>
      <path d="M12 4 4 8.5v7L12 20l8-4.5v-7L12 4z" />
      <path d="M4 8.5 12 13l8-4.5M12 13V20" />
      <path d="M8 6.2 16 10.7" strokeDasharray="1.5 1.5" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13.5" r="7" />
      <path d="M12 13.5v-4M12 8.5 14.5 9" />
      <path d="M9.5 3.5h5" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4.5" />
      <path d="M6 4.5h11.5L15.5 9l2 4.5H6" />
    </>
  ),
  qr: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="2.5" height="2.5" rx="0.5" />
      <rect x="17.5" y="14" width="2.5" height="2.5" rx="0.5" />
      <rect x="14" y="17.5" width="2.5" height="2.5" rx="0.5" />
      <rect x="17.5" y="17.5" width="2.5" height="2.5" rx="0.5" />
    </>
  ),
  share: <path d="M12 3.5v11M7.5 8 12 3.5 16.5 8M5 14v5a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-5" />,
  chat: <path d="M4.5 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4.5 3V6z" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.4 2.6a7 7 0 0 0-2 1.2l-2.5-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.4-2.6a7 7 0 0 0 2-1.2l2.5 1 2-3.4-2-1.5c.07-.4.1-.8.1-1.2z" />
    </>
  ),
  "back-inline": <path d="M12 5.5 5.5 12l6.5 6.5M5.5 12h13" />,
  meat: (
    <>
      <path d="M8.5 9.5h7c2.2 0 3.5 1.6 3.5 3.2S17.7 16 15.5 16h-7C6.3 16 5 14.4 5 12.7s1.3-3.2 3.5-3.2z" />
      <circle cx="7.2" cy="8.2" r="1.6" />
      <circle cx="16.8" cy="17.2" r="1.6" />
    </>
  ),
  sausage: <path d="M7 8.5c3.2-2 7.2-2 10 .6 2 1.8 2.2 4.6.2 6.6-2.8 2.6-7.4 2.8-10.4.4C4.6 14.2 4.2 10.6 7 8.5z" />,
  fish: (
    <>
      <path d="M3.5 12s3.8-4.5 9.2-4.5S21 12 21 12s-2.2 4.5-8.3 4.5S3.5 12 3.5 12z" />
      <path d="M3.5 12 7 9.2M3.5 12 7 14.8" />
      <circle cx="16.2" cy="11.6" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  produce: (
    <>
      <path d="M5 18.5C12 17.5 17 12 18.5 5 12.5 6.2 7 11 5 18.5z" />
      <path d="M8.5 15.5c2-2.6 4.6-5 8-6.5" />
    </>
  ),
  grain: (
    <>
      <path d="M12 20V7" />
      <path d="M12 9.5c-2.6-.8-4-2.6-4-4.8 2.6.2 3.8 1.8 4 4.8z" />
      <path d="M12 12.5c2.6-.8 4-2.6 4-4.8-2.6.2-3.8 1.8-4 4.8z" />
      <path d="M12 16c-2.2-.6-3.2-2-3.2-3.8 2 .2 3 1.4 3.2 3.8z" />
    </>
  ),
  spice: (
    <>
      <path d="M9 9h6v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9z" />
      <path d="M8.5 9h7" />
      <path d="M10 4.5h4V9h-4z" />
      <path d="M10.5 13h3M10.5 16h3" />
    </>
  ),
  jar: (
    <>
      <path d="M8 8.5h8V18a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8.5z" />
      <path d="M7 8.5h10" />
      <path d="M9.5 5h5v3.5h-5z" />
    </>
  ),
  bread: (
    <>
      <path d="M5 14.5c0-3.6 3-6.5 7-6.5s7 2.9 7 6.5V18H5v-3.5z" />
      <path d="M8.2 13.2h.01M12 11.8h.01M15.8 13.2h.01" />
    </>
  ),
  cake: (
    <>
      <path d="M4.5 14h15v5.5h-15z" />
      <path d="M6.5 14V10h11v4" />
      <path d="M12 6.5V10" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3.5v17" />
      <path d="m5.2 7 13.6 10" />
      <path d="m18.8 7-13.6 10" />
      <path d="m8 5.2 4 2.2 4-2.2M8 18.8 12 16.6l4 2.2" />
    </>
  ),
  nut: (
    <>
      <ellipse cx="12" cy="12" rx="5" ry="7" />
      <path d="M12 5.2v13.6" />
    </>
  ),
  coffee: (
    <>
      <path d="M6 8h9.5v5.5A3.5 3.5 0 0 1 12 17H9.5A3.5 3.5 0 0 1 6 13.5V8z" />
      <path d="M15.5 9.2h1.8a2.2 2.2 0 0 1 0 4.4h-1.8" />
      <path d="M8 20h8" />
    </>
  ),
  drink: (
    <>
      <path d="M8 4.5h8l-.8 15H8.8L8 4.5z" />
      <path d="M8.2 8.5h7.6" />
    </>
  ),
  baby: (
    <>
      <path d="M10 3.5h4V6l.8 1.5V17a2 2 0 0 1-2 2h-1.6a2 2 0 0 1-2-2V7.5L10 6V3.5z" />
      <path d="M10 9.5h4" />
    </>
  ),
  pet: (
    <>
      <circle cx="8" cy="8" r="1.6" />
      <circle cx="12" cy="6.2" r="1.6" />
      <circle cx="16" cy="8" r="1.6" />
      <ellipse cx="12" cy="14.5" rx="3.2" ry="2.6" />
    </>
  ),
  clean: (
    <>
      <path d="M10 10.5h4V19a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 19v-8.5z" />
      <path d="M11 10.5V7.5h2v3" />
      <path d="M9.5 5h5" />
      <path d="M14.5 6.2 17.5 4" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className ?? "size-6"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {shapes[name]}
    </svg>
  );
}

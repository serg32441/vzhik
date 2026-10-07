type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  value: string;
  onChange: (id: string) => void;
};

export function Tabs({ tabs, value, onChange }: TabsProps) {
  return (
    <div className="flex gap-sm overflow-x-auto" role="tablist">
      {tabs.map((tab) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={
              active
                ? "shrink-0 whitespace-nowrap rounded-pill bg-ink px-md py-sm text-label-md text-on-ink"
                : "shrink-0 whitespace-nowrap rounded-pill border border-line bg-card px-md py-sm text-label-md text-muted"
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

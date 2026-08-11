import type { ReactNode } from "react";

export function Label({
  children,
  accent = false,
  className = "",
}: {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span className={`label ${accent ? "text-accent" : "text-muted-foreground"} ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  title,
  meta,
  invert = false,
}: {
  index: string;
  title: string;
  meta?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b pb-5 ${
        invert ? "border-hairline-dark" : "border-hairline"
      }`}
    >
      <div className="min-w-0">
        <Label accent>{index}</Label>
        <h2 className="display mt-4 text-3xl sm:text-5xl">{title}</h2>
      </div>
      {meta ? (
        <span className="label hidden shrink-0 pb-2 text-muted-foreground sm:inline">{meta}</span>
      ) : null}
    </div>
  );
}

export function Corners() {
  return (
    <>
      <span className="crosshair pointer-events-none absolute left-0 top-0" />
      <span className="crosshair pointer-events-none absolute right-0 top-0" />
      <span className="crosshair pointer-events-none absolute bottom-0 left-0" />
      <span className="crosshair pointer-events-none absolute bottom-0 right-0" />
    </>
  );
}

export function DimensionRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-6">
      <span className="h-2 w-px bg-accent" />
      <span className="h-px flex-1 bg-hairline" />
      <span className="label text-muted-foreground">{label}</span>
      <span className="h-px flex-1 bg-hairline" />
      <span className="h-2 w-px bg-accent" />
    </div>
  );
}

import { Label, SectionHeader } from "@/components/site/Technical";

interface GalleryProps {
  index: string;
  title: string;
  meta: string;
  works: { code: string; title: string; type: string; description: string; image: string }[];
  columns: string;
  ratio: string;
  last?: boolean;
}

export function Gallery({
  index,
  title,
  meta,
  works,
  columns,
  ratio,
  last = false,
}: GalleryProps) {
  return (
    <section className={last ? "" : "border-b border-hairline"}>
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeader index={index} title={title} meta={meta} />

        <div className={`mt-12 grid gap-6 ${columns}`}>
          {works.map((w) => (
            <figure key={w.code + w.title} className="group relative min-w-0">
              <div className="overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${ratio}`}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-background/70 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Label accent>{w.code}</Label>
                <h3 className="display mt-3 text-xl">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.description}</p>
                <span className="label mt-4 text-muted-foreground">{w.type}</span>
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4">
                <Label>{w.title}</Label>
                <Label accent>{w.code}</Label>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

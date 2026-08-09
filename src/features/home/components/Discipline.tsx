import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Technical";

interface DisciplineProps {
  index: string;
  title: string;
  copy: string;
  cta: string;
  to: "/architecture" | "/graphics" | "/video";
  items: { image: string; caption: string }[];
  reverse?: boolean;
}

export function Discipline({
  index,
  title,
  copy,
  cta,
  to,
  items,
  reverse = false,
}: DisciplineProps) {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeader index={index} title={title} meta="Selected Work" />

        <div
          className={`mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="min-w-0">
            <p className="max-w-md text-muted-foreground">{copy}</p>
            <Link
              to={to}
              className="label link-underline mt-10 inline-block text-foreground transition-colors hover:text-accent"
            >
              {cta} →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((item, i) => (
              <figure key={item.caption} className="group min-w-0 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className={`w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0 ${
                      i === 1 ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  />
                </div>
                <figcaption className="label mt-3 text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Label, SectionHeader } from "@/components/site/Technical";
import { Gallery } from "@/features/graphics/components/Gallery";
import { blackRoseCreators, gfxSamplesImages, thumbnailDesignImages, NAME } from "@/data/portfolio";

export const Route = createFileRoute("/graphics")({
  head: () => ({
    meta: [
      { title: `Graphics & Illustrations — ${NAME}` },
      {
        name: "description",
        content:
          "Graphic design and illustration portfolio: the full Graphics & Illustrations PDF, Black Rose Content Creators work, GFX samples and thumbnail design.",
      },
      { property: "og:title", content: `Graphics & Illustrations — ${NAME}` },
      {
        property: "og:description",
        content:
          "Portfolio PDF, content graphics, GFX samples and YouTube thumbnail design.",
      },
    ],
  }),
  component: Graphics,
});

function Graphics() {
  return (
    <>
      <section className="relative border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Label accent>02 / GRAPHICS</Label>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
            Graphics &amp; illustrations.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Editorial layouts, content graphics, brand assets and thumbnail design —
            built on the same structural thinking as the architectural work.
          </p>
        </div>
      </section>

      {/* Featured PDF portfolio */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            index="GRAPHICS / 000"
            title="Graphics & Illustrations Portfolio"
            meta="Interactive Flipbook"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div className="min-w-0">
              <p className="text-muted-foreground">
                The complete graphics and illustrations portfolio, presented as an interactive
                flipbook. Browse through the pages directly here for the full experience.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-hairline pt-6">
                {[
                  ["Document", "Interactive Flipbook"],
                  ["Author", NAME],
                  ["Discipline", "Graphic Design"],
                  ["Edition", "2026"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="label text-muted-foreground">{k}</dt>
                    <dd className="mt-2 text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://heyzine.com/flip-book/e77cacef1c.html"
                  target="_blank"
                  rel="noreferrer"
                  className="label border border-foreground bg-foreground px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:bg-accent"
                >
                  Open in New Tab
                </a>
              </div>
            </div>

            <div>
              <iframe
                allowFullScreen
                allow="autoplay; fullscreen; clipboard-write"
                scrolling="no"
                className="fp-iframe w-full"
                style={{ border: "1px solid lightgray", height: "650px" }}
                src="https://heyzine.com/flip-book/e77cacef1c.html"
              />
            </div>
          </div>
        </div>
      </section>

      <Gallery
        index="GRAPHICS / 001"
        title="Black Rose Content Creators"
        meta="Creator Spotlight"
        works={blackRoseCreators}
        columns="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        ratio="aspect-[4/5]"
        viewMore={{ url: "https://drive.google.com/drive/folders/12ioNzzPdYf99vjK8PuQXbFFxPgRfA8K_?usp=drive_link" }}
      />

      <Gallery
        index="GRAPHICS / 002"
        title="GFX Samples"
        meta="Selected Samples"
        works={gfxSamplesImages}
        columns="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        ratio="aspect-[4/5]"
        viewMore={{ url: "https://drive.google.com/drive/folders/1m9EDO-w0AjYkYw2OhTZCjMifNdmiF37D?usp=drive_link" }}
      />

      <Gallery
        index="GRAPHICS / 003"
        title="Thumbnail Design"
        meta="16:9 Thumbnails"
        works={thumbnailDesignImages}
        columns="grid-cols-1 lg:grid-cols-2"
        ratio="aspect-video"
        viewMore={{ url: "https://drive.google.com/drive/folders/1RnwpHU0DFF_FTDgzVe5khL0VnLi4J__f?usp=drive_link" }}
        last
      />
    </>
  );
}

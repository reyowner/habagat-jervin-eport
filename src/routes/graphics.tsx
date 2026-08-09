import { createFileRoute } from "@tanstack/react-router";
import { Label, SectionHeader } from "@/components/site/Technical";
import { Gallery } from "@/features/graphics/components/Gallery";
import { PDFViewer } from "@/features/graphics/components/PDFViewer";
import { PDF_URL } from "@/features/graphics/constants/pdf-url";
import { blackRose, gfxSamples, thumbnails, images, NAME } from "@/data/portfolio";

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
            meta="PDF Presentation"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div className="min-w-0">
              <p className="text-muted-foreground">
                The complete graphics and illustrations portfolio, presented as a full
                document. Browse it directly here, or open it in a new tab for the
                full-resolution presentation.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-hairline pt-6">
                {[
                  ["Document", "PDF"],
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
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="label border border-foreground bg-foreground px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:bg-accent"
                >
                  Open Portfolio
                </a>
                <a
                  href={PDF_URL}
                  download
                  className="label border border-hairline px-8 py-4 transition-colors hover:border-accent hover:text-accent"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <PDFViewer images={images} name={NAME} />
          </div>
        </div>
      </section>

      <Gallery
        index="GRAPHICS / 001"
        title="Black Rose Content Creators"
        meta="Content & Campaign Work"
        works={blackRose}
        columns="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        ratio="aspect-[4/5]"
      />

      <Gallery
        index="GRAPHICS / 002"
        title="GFX Samples"
        meta="Selected Samples"
        works={gfxSamples}
        columns="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        ratio="aspect-[4/5]"
      />

      <Gallery
        index="GRAPHICS / 003"
        title="Thumbnail Design"
        meta="16:9 Thumbnails"
        works={thumbnails}
        columns="grid-cols-1 lg:grid-cols-2"
        ratio="aspect-video"
        last
      />
    </>
  );
}

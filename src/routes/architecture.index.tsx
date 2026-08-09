import { createFileRoute } from "@tanstack/react-router";
import { Label, SectionHeader } from "@/components/site/Technical";
import { DetailSampleCard } from "@/features/architecture/components/DetailSampleCard";
import { ProjectCard } from "@/features/architecture/components/ProjectCard";
import { ArchitecturePDFViewer } from "@/features/architecture/components/ArchitecturePDFViewer";
import { PDF_URL } from "@/features/architecture/constants/pdf-url";
import { CV_URL } from "@/features/architecture/constants/cv-url";
import { detailSamples, projects, NAME } from "@/data/portfolio";

export const Route = createFileRoute("/architecture/")({
  head: () => ({
    meta: [
      { title: `Architecture — ${NAME}` },
      {
        name: "description",
        content:
          "Architectural portfolio: construction details, plans, sections, elevations and full project case studies presented as a technical archive.",
      },
      { property: "og:title", content: `Architecture — ${NAME}` },
      {
        property: "og:description",
        content:
          "Detail drawings, plans and sections alongside architectural projects presented as case studies.",
      },
    ],
  }),
  component: Architecture,
});

function Architecture() {
  return (
    <>
      <section className="relative border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Label accent>01 / ARCHITECTURE</Label>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
            Drawings, details and built ideas.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            A working archive of architectural documentation and design projects — from
            construction details and section studies to complete presentation sets.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            index="ARCH / 000"
            title="Architecture Portfolio"
            meta="PDF Presentation"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div className="min-w-0">
              <p className="text-muted-foreground">
                The complete architecture portfolio, presented as a full document. Browse
                it directly here, or open it in a new tab for the full-resolution
                presentation.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-hairline pt-6">
                {[
                  ["Document", "PDF"],
                  ["Author", NAME],
                  ["Discipline", "Architecture"],
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
                <a
                  href={CV_URL}
                  download
                  className="label border border-hairline px-8 py-4 transition-colors hover:border-accent hover:text-accent"
                >
                  Download CV
                </a>
              </div>
            </div>

            <ArchitecturePDFViewer name={NAME} />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            index="ARCH / 001"
            title="Architectural Detail Samples"
            meta={`${detailSamples.length} Drawings`}
          />

          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-3">
            {detailSamples.map((d) => (
              <DetailSampleCard key={d.code} detailSample={d} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            index="ARCH / 002"
            title="Architectural Projects"
            meta={`${projects.length} Projects`}
          />

          <div className="mt-14 space-y-20">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

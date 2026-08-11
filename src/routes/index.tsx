import { createFileRoute, Link } from "@tanstack/react-router";
import { Label, SectionHeader, DimensionRule } from "@/components/site/Technical";
import { Discipline } from "@/features/home/components/Discipline";
import {
  projects,
  detailSamples,
  NAME,
  thumbnailBackdoor,
  thumbnailBackend,
  thumbnailEcom,
  centminusCC,
  blackroseCrew,
  ltkVlog,
} from "@/data/portfolio";
import home1 from "@/assets/home1.png";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} — Architecture, Graphics & Video Portfolio` },
      {
        name: "description",
        content:
          "Multidisciplinary creative portfolio: architectural design and drawings, graphic design and illustration, and long- and short-form video work.",
      },
      { property: "og:title", content: `${NAME} — Architecture, Graphics & Video` },
      {
        property: "og:description",
        content:
          "Designing spaces, visuals and stories. Architecture, graphic design and video/content creation portfolio.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-hairline lg:block" />

        <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[2.5fr_1.5fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="reveal min-w-0">
            <div className="flex flex-wrap items-center gap-4">
              <Label accent>ARCH · GFX · VIDEO / 001</Label>
              <span className="h-px w-16 bg-accent" />
              <Label>E-Portfolio 2026</Label>
            </div>

            <h1 className="display mt-10 text-[clamp(2.75rem,8vw,6.5rem)]">
              Elevating Lifestyle through
              <br />
              <span className="text-[oklch(0.78_0.11_85_/_0.65)]">Strategic Design</span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Helping people produce strategic architectural designs, with the goal of enhancing
              people's lives and boosting the productivity and efficiency of their businesses.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/architecture"
                className="label border border-foreground bg-foreground px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:bg-accent"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="label border border-hairline px-8 py-4 text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative h-[500px]">
              <div className="absolute left-0 top-0 animate-float">
                <div className="min-w-58 max-w-58 overflow-hidden rounded-2xl border-2 border-hairline bg-background shadow-2xl">
                  <img src={home1} alt="Portrait" className="aspect-square w-full object-cover" />
                  <div className="bg-background/95 px-4 py-2">
                    <p className="label break-words text-xs text-muted-foreground">Me</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-20 animate-float-delayed">
                <div className="min-w-62 max-w-62 overflow-hidden rounded-2xl border-2 border-hairline bg-background shadow-2xl">
                  <img
                    src={home2}
                    alt="Designed House"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="bg-background/95 px-4 py-2">
                    <p className="label break-words text-xs text-muted-foreground">
                      Residential Project
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute left-14 -bottom-15 animate-float-slow">
                <div className="min-w-56 max-w-56 overflow-hidden rounded-2xl border-2 border-hairline bg-background shadow-2xl">
                  <img
                    src={home3}
                    alt="Interior Design"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="bg-background/95 px-4 py-2">
                    <p className="label break-words text-xs text-muted-foreground">
                      Architectural Interior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Discipline
        index="01 / ARCHITECTURE"
        title="Architectural Detail Samples & Projects"
        copy="Technical drawings, construction details, plans and sections alongside larger design projects presented as full case studies."
        cta="Explore Architecture"
        to="/architecture"
        items={[
          { image: projects[0]!.cover, caption: projects[0]!.name },
          { image: detailSamples[0]!.image, caption: detailSamples[0]!.title },
          { image: projects[1]!.cover, caption: projects[1]!.name },
        ]}
      />

      <Discipline
        index="02 / GRAPHICS"
        title="Graphics, Illustrations & Thumbnails"
        copy="The Graphics & Illustrations portfolio, content work for Black Rose Content Creators, GFX samples and thumbnail design."
        cta="Explore Graphics"
        to="/graphics"
        reverse
        items={[
          { image: centminusCC, caption: "Centminus - Creator Spotlight" },
          { image: blackroseCrew, caption: "Black Rose Crew - Team Graphic" },
          { image: ltkVlog, caption: "LTK VLOG 1 - Thumbnail" },
        ]}
      />

      <Discipline
        index="03 / VIDEO"
        title="Long Form & Short Form Content"
        copy="Documentary edits, architecture films and brand content, plus vertical short-form work for reels, shorts and TikTok."
        cta="Explore Video"
        to="/video"
        items={[
          { image: thumbnailBackdoor, caption: "Backdoor Gastropub" },
          { image: thumbnailBackend, caption: "Black Rose Event" },
          { image: thumbnailEcom, caption: "ECOM City" },
        ]}
      />
    </>
  );
}

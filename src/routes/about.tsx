import { createFileRoute, Link } from "@tanstack/react-router";
import { Label, DimensionRule } from "@/components/site/Technical";
import { SKILLS } from "@/features/about/constants/skills";
import { SOFTWARE } from "@/features/about/constants/software";
import { EXPERIENCE } from "@/features/about/constants/experience";
import { EDUCATION } from "@/features/about/constants/education";
import { CollapsibleCategory } from "@/features/about/components/CollapsibleCategory";
import { images, NAME } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${NAME}` },
      {
        name: "description",
        content:
          "Multidisciplinary creative working across architecture, graphic design and video. Skills, software, disciplines and experience.",
      },
      { property: "og:title", content: `About — ${NAME}` },
      {
        property: "og:description",
        content: "Architecture. Graphics. Motion. A multidisciplinary creative practice.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Label accent>04 / ABOUT</Label>
          <h1 className="display mt-8 text-[clamp(2.75rem,8vw,6rem)]">
            Architecture.
            <br />
            Graphics.
            <br />
            <span className="text-[oklch(0.78_0.11_85_/_0.65)]">Motion.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-12">
          <div className="relative min-w-0 max-w-[580px]">
            <img
              src={images.portrait}
              alt={`Portrait of ${NAME}`}
              loading="lazy"
              width={400}
              height={480}
              className="w-full object-cover"
            />
            <span className="label absolute -top-6 left-0 text-accent">FIG. 01 / PORTRAIT</span>
          </div>

          <div className="min-w-0">
            <p className="text-xl leading-relaxed sm:text-2xl">
              {NAME} — a Filipino architect, 3D visualizer, creative designer, illustrator, and
              multimedia designer with 6+ years of experience across architectural design, space
              planning, 3D visualization, graphic design, and multimedia content.
            </p>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Co-founder of HACARA+ Architects, dedicated to creating thoughtful, impactful design
                solutions that balance creativity, functionality, aesthetics, and technical precision.
              </p>
              <p>
                Combines a strong architectural foundation with visual communication skills to turn
                ideas, plans, and references into compelling visualizations, presentations, and design
                solutions.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              <div>
                <Label accent>Skills</Label>
                <div className="mt-5 space-y-4">
                  {SKILLS.map((category) => (
                    <CollapsibleCategory
                      key={category.category}
                      category={category.category}
                      items={category.skills}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label accent>Software Tools</Label>
                <div className="mt-5 space-y-4">
                  {SOFTWARE.map((category) => (
                    <CollapsibleCategory
                      key={category.category}
                      category={category.category}
                      items={category.software}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12">
          <Label accent>Experience</Label>
          <ul className="mt-10">
            {EXPERIENCE.map((e) => (
              <li
                key={e.role}
                className="grid gap-2 border-t border-hairline py-6 sm:grid-cols-[220px_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="label text-muted-foreground">{e.year}</span>
                <span className="display text-xl">{e.place}</span>
                <span className="label text-muted-foreground">{e.role}</span>
              </li>
            ))}
          </ul>

          <Label accent className="mt-16 block">
            Education
          </Label>
          <ul className="mt-10">
            {EDUCATION.map((e) => (
              <li key={e.institution} className="border-t border-hairline py-6">
                <div className="grid gap-2 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-8">
                  <span className="label text-muted-foreground">{e.year}</span>
                  <div>
                    <span className="display block text-xl">{e.institution}</span>
                    <span className="label mt-2 block text-muted-foreground">{e.degree}</span>
                    {e.achievements && e.achievements.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {e.achievements.map((achievement) => (
                          <li key={achievement} className="text-sm text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <DimensionRule label="Available for work" />

          <Link
            to="/contact"
            className="label inline-block border border-foreground bg-foreground px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:bg-accent"
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </section>
    </>
  );
}

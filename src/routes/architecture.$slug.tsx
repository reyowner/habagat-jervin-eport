import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Label } from "@/components/site/Technical";
import { projects, NAME, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/architecture/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — ${NAME}` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.name} — ${NAME}` },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article>
      <section className="relative border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Link
            to="/architecture"
            className="label link-underline text-muted-foreground transition-colors hover:text-accent"
          >
            ← Architecture
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="min-w-0">
              <Label accent>{project.code}</Label>
              <h1 className="display mt-6 text-[clamp(2.5rem,6vw,5rem)]">
                {project.name}
              </h1>
            </div>
            <dl className="grid grid-cols-2 gap-y-6 self-end border-t border-hairline pt-6">
              {[
                ["Type", project.type],
                ["Location", project.location],
                ["Year", project.year],
                ...project.facts.map((f) => [f.label, f.value] as const),
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-muted-foreground">{k}</dt>
                  <dd className="mt-2 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <img
          src={project.cover}
          alt={project.name}
          className="aspect-[16/9] w-full object-cover grayscale"
        />
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-12">
          <Label accent>Project Statement</Label>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            {project.description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12">
          <Label accent>Presentation Board</Label>
          <div className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {project.gallery.map((g, i) => (
              <figure key={g.caption} className="bg-background p-5">
                <img
                  src={g.image}
                  alt={g.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <figcaption className="mt-4 flex items-center justify-between gap-4">
                  <Label>{g.caption}</Label>
                  <Label accent>{String(i + 1).padStart(2, "0")}</Label>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-hairline pt-10">
            <Link
              to="/architecture"
              className="label border border-hairline px-8 py-4 transition-colors hover:border-accent hover:text-accent"
            >
              All Projects
            </Link>
            <Link
              to="/contact"
              className="label border border-foreground bg-foreground px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:bg-accent"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

import { Link } from "@tanstack/react-router";
import { Label } from "@/components/site/Technical";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className={`grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14 ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link to="/architecture/$slug" params={{ slug: project.slug }} className="group block min-w-0 overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </Link>

      <div className="flex min-w-0 flex-col justify-between">
        <div>
          <Label accent>{project.code}</Label>
          <h3 className="display mt-5 text-3xl sm:text-4xl">{project.name}</h3>
          <p className="mt-5 text-muted-foreground">{project.summary}</p>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-hairline pt-6">
          {[
            ["Type", project.type],
            ["Location", project.location],
            ["Year", project.year],
            ["Status", project.facts[0]!.value],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="label text-muted-foreground">{k}</dt>
              <dd className="mt-2 text-sm">{v}</dd>
            </div>
          ))}
        </dl>

        <Link
          to="/architecture/$slug"
          params={{ slug: project.slug }}
          className="label link-underline mt-8 inline-block self-start transition-colors hover:text-accent"
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}

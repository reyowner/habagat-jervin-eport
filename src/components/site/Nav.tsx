import { Link } from "@tanstack/react-router";
import { NAME } from "@/data/portfolio";

const links = [
  { to: "/", num: "00", label: "Home" },
  { to: "/architecture", num: "01", label: "Architecture" },
  { to: "/graphics", num: "02", label: "Graphics" },
  { to: "/video", num: "03", label: "Video" },
  { to: "/about", num: "04", label: "About" },
  { to: "/contact", num: "05", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="min-w-0">
          <span className="display block truncate text-sm uppercase tracking-[0.2em]">
            {NAME}
          </span>
          <span className="label mt-1 block text-muted-foreground">
            Architecture · Graphics · Video
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-8 lg:flex">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="label link-underline text-muted-foreground hover:text-foreground"
              activeProps={{ className: "label link-underline text-foreground active-nav" }}
            >
              <span className="text-accent">{l.num}</span> / {l.label}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <span className="label">Menu</span>
        </div>
      </div>
    </header>
  );
}

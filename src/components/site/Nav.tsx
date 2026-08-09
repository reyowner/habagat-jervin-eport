import { Link } from "@tanstack/react-router";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
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
              className="label link-underline text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "label link-underline text-foreground" }}
            >
              <span className="text-accent">{l.num}</span> / {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="label shrink-0 border border-hairline px-4 py-3 text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-hairline lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-hairline px-5 py-5 sm:px-8"
              activeProps={{ className: "text-accent" }}
            >
              <span className="label text-accent">{l.num}</span>
              <span className="display text-2xl">{l.label}</span>
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

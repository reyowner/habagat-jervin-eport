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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="min-w-0">
          <span className="display block truncate text-sm uppercase tracking-[0.2em]">{NAME}</span>
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

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="label">{mobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-menu" className="lg:hidden border-t border-hairline bg-background">
          <ul className="space-y-1 px-5 py-4 sm:px-8 lg:px-12">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="label link-underline block py-2 text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "label link-underline text-foreground active-nav" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-accent">{l.num}</span> / {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

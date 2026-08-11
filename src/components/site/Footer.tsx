import { Link } from "@tanstack/react-router";
import { NAME } from "@/data/portfolio";

const nav = [
  { to: "/architecture", label: "Architecture" },
  { to: "/graphics", label: "Graphics" },
  { to: "/video", label: "Video" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="display text-3xl sm:text-4xl">{NAME}</h2>
            <p className="label mt-4 text-muted-foreground">Architecture · Graphics · Video</p>
          </div>

          <div>
            <p className="label text-accent">Index</p>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="label link-underline text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-accent">Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:ar.jervinhabagat@gmail.com"
                  className="label link-underline text-muted-foreground hover:text-foreground"
                >
                  ar.jervinhabagat@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/ar_jervinhabagat"
                  target="_blank"
                  rel="noreferrer"
                  className="label link-underline inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arjervinhabagat/"
                  target="_blank"
                  rel="noreferrer"
                  className="label link-underline inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ar.jervinhabagat"
                  target="_blank"
                  rel="noreferrer"
                  className="label link-underline inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <span className="label text-muted-foreground">
            © 2026 {NAME.toUpperCase()} — PORTFOLIO
          </span>
          <span className="label text-muted-foreground">LAT 10.3157° N / LON 123.8854° E</span>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Label } from "@/components/site/Technical";
import { Field } from "@/features/contact/components/Field";
import { OpportunitySelector } from "@/features/contact/components/OpportunitySelector";
import { OPPORTUNITIES, type OpportunityType } from "@/features/contact/constants/opportunities";
import { NAME } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${NAME}` },
      {
        name: "description",
        content:
          "Available for freelance projects and full-time creative roles in architecture, graphic design and video. Start a project or discuss a role.",
      },
      { property: "og:title", content: `Contact — ${NAME}` },
      {
        property: "og:description",
        content: "Open to freelance work and full-time opportunities.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [type, setType] = useState<OpportunityType>("Freelance");
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Label accent>05 / CONTACT</Label>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
            Let&apos;s work together.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Currently available for both freelance projects and full-time creative
            roles.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1600px] gap-px bg-hairline sm:grid-cols-2">
          {[
            {
              label: "Freelance",
              copy: "For project-based work, collaborations, design services, graphics, architectural work, or video editing.",
              cta: "Start a Project",
              value: "Freelance",
            },
            {
              label: "Full-Time",
              copy: "For companies, studios, agencies, or teams looking for a full-time creative professional.",
              cta: "Discuss a Role",
              value: "Full-Time",
            },
          ].map((o) => (
            <div key={o.label} className="bg-background px-5 py-16 sm:px-10 lg:px-12">
              <Label accent>{o.label}</Label>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">{o.copy}</p>
              <a
                href="#contact-form"
                onClick={() => setType(o.value as OpportunityType)}
                className="label link-underline mt-10 inline-block transition-colors hover:text-accent"
              >
                {o.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-12">
          <div>
            <Label accent>Direct</Label>
            <ul className="mt-8 space-y-5">
              {[
                ["Email", "ar.jervinhabagat@gmail.com", "mailto:ar.jervinhabagat@gmail.com"],
                ["Phone", "+63 926 116 1347", "tel:+639261161347"],
                ["Location", "Mariveles, Bataan, Philippines", null],
                ["Behance", "ar_jervinhabagat", "https://www.behance.net/ar_jervinhabagat"],
                ["LinkedIn", "arjervinhabagat", "https://www.linkedin.com/in/arjervinhabagat/"],
                ["Facebook", "ar.jervinhabagat", "https://www.facebook.com/ar.jervinhabagat"],
              ].map(([k, v, href]) => (
                <li key={k} className="border-b border-hairline pb-5">
                  <span className="label block text-muted-foreground">{k}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline mt-3 inline-block text-sm transition-colors hover:text-accent"
                    >
                      {v}
                    </a>
                  ) : (
                    <span className="mt-3 inline-block text-sm">{v}</span>
                  )}
                </li>
              ))}
            </ul>

            <Label accent className="mt-12 block">Content Creation</Label>
            <ul className="mt-8 space-y-5">
              {[
                { platform: "Facebook", handle: "TortaLongTTV", url: "https://www.facebook.com/TorTalongTTV" },
                { platform: "Twitch", handle: "tortalong_tv", url: "https://www.twitch.tv/tortalong_tv" },
                { platform: "TikTok", handle: "@tortalong_tv", url: "https://www.tiktok.com/@tortalong_tv?lang=en" },
                { platform: "YouTube", handle: "@Coy_ha", url: "https://www.youtube.com/@Coy_ha" },
                { platform: "YouTube", handle: "@TortaLongTTV", url: "https://www.youtube.com/@TortaLongTTV" },
              ].map((item) => (
                <li key={item.platform + item.handle} className="border-b border-hairline pb-5">
                  <span className="label block text-muted-foreground">{item.platform}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-3 inline-block text-sm transition-colors hover:text-accent"
                  >
                    {item.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="min-w-0"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Label accent>Enquiry Form</Label>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
            </div>

            <OpportunitySelector selected={type} onSelect={setType} />

            <div className="mt-8">
              <label htmlFor="message" className="label text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about the project or role."
                className="mt-4 w-full border border-hairline bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                type="submit"
                className="label border border-foreground bg-foreground px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:bg-accent"
              >
                Submit
              </button>
              {sent ? (
                <span className="label text-accent">
                  Thank you — message noted as {type}
                </span>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

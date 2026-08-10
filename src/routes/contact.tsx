import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailjsInitialized = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

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
                className="label link-underline mt-10 inline-block hover:text-accent"
              >
                {o.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[5fr_5fr] lg:gap-16 lg:px-12">
          <div>
            <Label accent>Enquiry Form</Label>

            <form
              ref={formRef}
              className="mt-8"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setError(null);

                // Dynamically import EmailJS only on submit
                try {
                  const emailjs = await import("@emailjs/browser");
                  
                  // Lazy initialize EmailJS only on first submit
                  if (!emailjsInitialized.current) {
                    emailjs.default.init("o2UFB-h1s6jjuGObJ");
                    emailjsInitialized.current = true;
                  }

                  const formElement = e.target as HTMLFormElement;
                  const formData = new FormData(formElement);
                  const templateParams = {
                    from_name: formData.get("name"),
                    from_email: formData.get("email"),
                    opportunity_type: type,
                    message: formData.get("message"),
                  };

                  await emailjs.default.send(
                    "service_dforpz6",
                    "template_qmunvqj",
                    templateParams
                  );
                  setSent(true);
                  formElement.reset();
                } catch (err) {
                  setError("Failed to send message. Please try again.");
                  console.error("EmailJS error:", err);
                } finally {
                  setLoading(false);
                }
              }}
            >
              <div className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
                </div>

                <OpportunitySelector selected={type} onSelect={setType} />

                <div>
                  <label htmlFor="message" className="label text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about the project or role."
                    className="mt-4 w-full border border-hairline bg-transparent px-4 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="label border border-foreground bg-foreground px-8 py-4 text-primary-foreground hover:border-accent hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                  {sent ? (
                    <span className="label text-accent">
                      Thank you — message sent successfully
                    </span>
                  ) : null}
                  {error ? (
                    <span className="label text-destructive">{error}</span>
                  ) : null}
                </div>
              </div>
            </form>
          </div>

          <div>
            <Label accent>Direct</Label>
            <ul className="mt-8 space-y-5">
              {[
                ["Email", "ar.jervinhabagat@gmail.com", "mailto:ar.jervinhabagat@gmail.com", "/icons8-email-48.png"],
                ["Phone", "+63 926 116 1347", "tel:+639261161347", "/icons8-call-30.png"],
                ["Location", "Mariveles, Bataan, Philippines", undefined, "/icons8-location-48.png"],
                ["Behance", "ar_jervinhabagat", "https://www.behance.net/ar_jervinhabagat", "/icons8-behance-48.png"],
                ["LinkedIn", "arjervinhabagat", "https://www.linkedin.com/in/arjervinhabagat/", "/icons8-linkedin-48.png"],
                ["Facebook", "ar.jervinhabagat", "https://www.facebook.com/ar.jervinhabagat", "/icons8-facebook-48.png"],
              ].map(([k, v, href, icon]) => (
                <li key={k} className="border-b border-hairline pb-5">
                  <span className="label block text-muted-foreground">{k}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline mt-3 inline-flex items-center gap-3 text-sm hover:text-accent"
                    >
                      {icon && <img src={icon} alt={k} className="w-5 h-5" />}
                      {v}
                    </a>
                  ) : (
                    <span className="mt-3 inline-flex items-center gap-3 text-sm">
                      {icon && <img src={icon} alt={k} className="w-5 h-5" />}
                      {v}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

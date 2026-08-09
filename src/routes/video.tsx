import { createFileRoute } from "@tanstack/react-router";
import { Label, SectionHeader } from "@/components/site/Technical";
import { VideoCard } from "@/features/video/components/VideoCard";
import { VideoModal } from "@/features/video/components/VideoModal";
import { useVideoModal } from "@/features/video/hooks/useVideoModal";
import { longForm, shortForm, NAME } from "@/data/portfolio";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: `Video & Content Creation — ${NAME}` },
      {
        name: "description",
        content:
          "Video portfolio: long-form documentary, architecture and brand films alongside short-form reels, shorts and social edits.",
      },
      { property: "og:title", content: `Video & Content Creation — ${NAME}` },
      {
        property: "og:description",
        content: "Long form and short form video work by a multidisciplinary creative.",
      },
    ],
  }),
  component: Video,
});

function Video() {
  const { active, setActive, close } = useVideoModal();

  return (
    <>
      <section className="relative border-b border-hairline">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Label accent>03 / VIDEO</Label>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
            Video &amp; content creation.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Editing, motion and content direction — from long-form documentary cuts to
            fast vertical social edits.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader index="VIDEO / 001" title="Long Form" meta="Video & Motion" />

          <div className="mt-12 space-y-6">
            {longForm.map((v) => (
              <VideoCard key={v.code} video={v} onClick={setActive} variant="long" />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1pGGUYm2BcMFE__3MzF6uYQAo63X7lWlW?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-hairline px-8 py-4 transition-colors hover:border-accent hover:text-accent"
            >
              View More Work Like This →
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader index="VIDEO / 002" title="Short Form" meta="Reels · Shorts · TikTok" />

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {shortForm.map((v) => (
              <VideoCard key={v.code} video={v} onClick={setActive} variant="short" />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1LHH-e_eoNIlkmTSmteuN-NlDJrsPrzHs?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-hairline px-8 py-4 transition-colors hover:border-accent hover:text-accent"
            >
              View More Work Like This →
            </a>
          </div>
        </div>
      </section>

      <VideoModal active={active} onClose={close} />
    </>
  );
}

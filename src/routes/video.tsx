import { createFileRoute } from "@tanstack/react-router";
import { Label, SectionHeader } from "@/components/site/Technical";
import { VideoCard } from "@/features/video/components/VideoCard";
import { VideoModal } from "@/features/video/components/VideoModal";
import { useVideoModal } from "@/features/video/hooks/useVideoModal";
import { longForm, shortForm, NAME } from "@/data/portfolio";
import headerContentCreation from "@/assets/header-contentcreation-video.jpg";

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

      <section className="border-b border-hairline relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={headerContentCreation}
            alt="Content Creation"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader index="VIDEO / 001" title="Content Creation" meta="Content Production" />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* My Role */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">🎬</span>
                </div>
                <div>
                  <Label accent>My Role</Label>
                  <p className="text-sm text-muted-foreground">Coyha — Stream Engineer, Video Editor & Graphics Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I provide video editing and graphics design services for content creators. Currently
                working with Tortalong to produce engaging content across multiple social platforms,
                handling everything from thumbnail design to video post-production.
              </p>
            </div>

            {/* Platforms Grid */}
            <div>
              <Label accent className="mb-6 block">Platforms</Label>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { platform: "YouTube", handle: "@Coy_ha", url: "https://www.youtube.com/@Coy_ha", icon: "/icons8-youtube-48.png", color: "hover:border-[#FF0000]", role: "My Channel" },
                  { platform: "TikTok", handle: "@coy_ha", url: "https://www.tiktok.com/@coy_ha", icon: "/icons8-tiktok-48.png", color: "hover:border-[#000000]", role: "My Channel" },
                  { platform: "YouTube", handle: "@TortaLongTTV", url: "https://www.youtube.com/@TortaLongTTV", icon: "/icons8-youtube-48.png", color: "hover:border-[#FF0000]", role: "Client Channel" },
                  { platform: "TikTok", handle: "@tortalong_tv", url: "https://www.tiktok.com/@tortalong_tv?lang=en", icon: "/icons8-tiktok-48.png", color: "hover:border-[#000000]", role: "Client Channel" },
                  { platform: "Facebook", handle: "TortaLongTTV", url: "https://www.facebook.com/TorTalongTTV", icon: "/icons8-facebook-48.png", color: "hover:border-[#1877F2]", role: "Client Channel" },
                  { platform: "Twitch", handle: "tortalong_tv", url: "https://www.twitch.tv/tortalong_tv", icon: "/icons8-twitch-48.png", color: "hover:border-[#9146FF]", role: "Client Channel" },
                ].map((item) => (
                  <a
                    key={item.platform + item.handle}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative overflow-hidden border border-hairline bg-background p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <img src={item.icon} alt={item.platform} className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex-1 min-w-0">
                        <p className="label text-muted-foreground text-xs">{item.platform}</p>
                        <p className="text-sm font-medium group-hover:text-accent transition-colors truncate">{item.handle}</p>
                      </div>
                      <span className="label text-xs text-muted-foreground bg-hairline px-2 py-1">{item.role}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader index="VIDEO / 002" title="Long Form" meta="Video & Motion" />

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
          <SectionHeader index="VIDEO / 003" title="Short Form" meta="Reels · Shorts · TikTok" />

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

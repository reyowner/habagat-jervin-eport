import { Label } from "@/components/site/Technical";
import { VideoWork } from "@/data/portfolio";

interface VideoCardProps {
  video: VideoWork;
  onClick: (video: VideoWork) => void;
  variant: "long" | "short";
}

export function VideoCard({ video, onClick, variant }: VideoCardProps) {
  if (variant === "long") {
    return (
      <button
        type="button"
        onClick={() => onClick(video)}
        className="group grid w-full gap-6 border border-hairline p-5 text-left transition-colors hover:border-accent lg:grid-cols-[1.2fr_1fr] lg:gap-10"
      >
        <div className="relative min-w-0 overflow-hidden">
          {video.image ? (
            <img
              src={video.image}
              alt={video.title}
              loading="lazy"
              className="aspect-video w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          ) : (
            <video
              src={video.video}
              className="aspect-video w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              muted
            />
          )}
          <span className="label absolute bottom-4 right-4 bg-background/80 px-3 py-2">
            {video.duration}
          </span>
        </div>
        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <Label accent>{video.code}</Label>
            <h3 className="display mt-4 text-2xl sm:text-3xl">{video.title}</h3>
            <p className="mt-4 text-muted-foreground">{video.description}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-5">
            <Label>{video.category}</Label>
            <Label>Runtime {video.duration}</Label>
            <span className="label text-accent">Play →</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button type="button" onClick={() => onClick(video)} className="group min-w-0 text-left">
      <div className="relative overflow-hidden">
        {video.image ? (
          <img
            src={video.image}
            alt={video.title}
            loading="lazy"
            className="aspect-[9/16] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        ) : (
          <video
            src={video.video}
            className="aspect-[9/16] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
            muted
          />
        )}
        <span className="label absolute bottom-3 right-3 bg-background/80 px-2 py-1">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <Label>{video.title}</Label>
        <Label accent>{video.category}</Label>
      </div>
    </button>
  );
}

import { Label } from "@/components/site/Technical";
import { VideoWork } from "@/data/portfolio";

interface VideoModalProps {
  active: VideoWork | null;
  onClose: () => void;
}

export function VideoModal({ active, onClose }: VideoModalProps) {
  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-5"
      role="dialog"
      aria-modal="true"
      aria-label={active.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl border border-hairline bg-background p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <Label accent>{active.code}</Label>
            <h2 className="display mt-3 truncate text-2xl">{active.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="label shrink-0 border border-hairline px-4 py-3 transition-colors hover:border-accent hover:text-accent"
          >
            Close
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center bg-muted">
          <video src={active.video} controls autoPlay className="max-h-[65vh] w-full">
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-5">
          <Label>{active.category}</Label>
          <Label>{active.duration}</Label>
          <span className="text-sm text-muted-foreground">{active.description}</span>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { VideoWork } from "@/data/portfolio";

export function useVideoModal() {
  const [active, setActive] = useState<VideoWork | null>(null);

  return {
    active,
    setActive,
    isOpen: active !== null,
    close: () => setActive(null),
  };
}

import { Label } from "@/components/site/Technical";
import { PDF_URL } from "../constants/pdf-url";
import { CV_URL } from "../constants/cv-url";

interface ArchitecturePDFViewerProps {
  name: string;
}

export function ArchitecturePDFViewer({ name }: ArchitecturePDFViewerProps) {
  return (
    <div className="relative border border-hairline p-3">
      <object
        data={PDF_URL}
        type="application/pdf"
        className="h-[520px] w-full bg-paper lg:h-[640px]"
        aria-label="Architecture Portfolio PDF"
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 bg-paper p-8 text-center">
          <p className="label text-paper-foreground">
            Preview unavailable — open the portfolio
          </p>
        </div>
      </object>
      <span className="label absolute -top-6 left-0 text-accent">
        ARCH / PDF
      </span>
    </div>
  );
}

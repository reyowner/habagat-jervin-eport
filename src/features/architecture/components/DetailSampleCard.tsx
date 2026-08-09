import { Label } from "@/components/site/Technical";
import { DetailSample } from "@/data/portfolio";

interface DetailSampleCardProps {
  detailSample: DetailSample;
}

export function DetailSampleCard({ detailSample }: DetailSampleCardProps) {
  return (
    <article className="group bg-background p-5">
      <div className="overflow-hidden bg-paper">
        <img
          src={detailSample.image}
          alt={detailSample.title}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <Label accent>{detailSample.code}</Label>
        <Label>{detailSample.year}</Label>
      </div>
      <h3 className="display mt-3 text-xl">{detailSample.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{detailSample.description}</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-4">
        <Label>{detailSample.category}</Label>
        <Label>{detailSample.tools}</Label>
      </div>
    </article>
  );
}

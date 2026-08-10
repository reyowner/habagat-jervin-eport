import { Label } from "@/components/site/Technical";
import { DetailSample } from "@/data/portfolio";

interface DetailSampleCardProps {
  detailSample: DetailSample;
}

export function DetailSampleCard({ detailSample }: DetailSampleCardProps) {
  const cardContent = (
    <>
      <div className="relative overflow-hidden bg-paper">
        <img
          src={detailSample.image}
          alt={detailSample.title}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {detailSample.link && (
          <span className="label absolute bottom-3 right-3 bg-background/80 px-2 py-1">
            View →
          </span>
        )}
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
    </>
  );

  return (
    <article className="group bg-background p-5">
      {detailSample.link ? (
        <a
          href={detailSample.link}
          target="_blank"
          rel="noreferrer"
          className="block transition-opacity hover:opacity-90"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </article>
  );
}

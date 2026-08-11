import { Label } from "@/components/site/Technical";
import { OPPORTUNITIES, type OpportunityType } from "../constants/opportunities";
import { memo } from "react";

interface OpportunitySelectorProps {
  selected: OpportunityType;
  onSelect: (type: OpportunityType) => void;
}

export const OpportunitySelector = memo(function OpportunitySelector({
  selected,
  onSelect,
}: OpportunitySelectorProps) {
  return (
    <div>
      <span className="label text-muted-foreground">Opportunity Type</span>
      <div className="mt-4 flex flex-wrap gap-3">
        {OPPORTUNITIES.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onSelect(o)}
            className={`label border px-5 py-3 ${
              selected === o
                ? "border-accent text-accent"
                : "border-hairline text-muted-foreground hover:text-foreground"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
});

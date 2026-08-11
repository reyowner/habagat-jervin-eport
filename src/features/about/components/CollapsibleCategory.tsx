import { useState } from "react";
import { Label } from "@/components/site/Technical";

interface CollapsibleCategoryProps {
  category: string;
  items: string[];
  defaultOpen?: boolean;
}

export function CollapsibleCategory({
  category,
  items,
  defaultOpen = false,
}: CollapsibleCategoryProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-hairline pb-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between text-left"
      >
        <span className="text-sm font-medium text-foreground">{category}</span>
        <span className="label text-muted-foreground">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="label border border-hairline px-3 py-1.5 text-xs">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

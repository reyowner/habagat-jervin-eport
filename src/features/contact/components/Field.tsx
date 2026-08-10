import { memo } from "react";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}

export const Field = memo(function Field({ label, name, type = "text", placeholder }: FieldProps) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="label text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-4 w-full border-b border-hairline bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
      />
    </div>
  );
});

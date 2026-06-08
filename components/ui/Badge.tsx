import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  color?: string;
  className?: string;
}

export function Badge({ label, color = "#F5C518", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase",
        className
      )}
      style={{
        backgroundColor: `${color}20`,
        color,
        border: `1px solid ${color}40`,
      }}
    >
      {label}
    </span>
  );
}

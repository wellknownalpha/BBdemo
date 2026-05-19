import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-neutral-800 text-neutral-300",
        variant === "primary" && "bg-primary-500/10 text-primary-400 border border-primary-500/20",
        variant === "secondary" && "bg-secondary-500/10 text-secondary-400 border border-secondary-500/20",
        variant === "outline" && "border border-white/10 text-neutral-400",
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "brand" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-in-out",
          // Variants
          {
            "bg-surface-subtle text-text-secondary": variant === "default",
            "bg-brand-blue text-white": variant === "brand",
            "border border-border-light text-text-primary bg-white": variant === "outline",
          },
          // Sizes
          {
            "px-2 py-1 text-xs": size === "sm",
            "px-3 py-1.5 text-caption": size === "md",
            "px-4 py-2 text-sm": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = "Badge"
export default Badge
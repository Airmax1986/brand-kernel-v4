import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "elevated" | "accent"
  padding?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "primary", padding = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-card transition-all duration-200 ease-in-out",
          // Variants
          {
            "bg-white border border-border-light shadow-card hover:shadow-card-hover hover:-translate-y-1":
              variant === "primary",
            "bg-white border border-border-light shadow-card-hover":
              variant === "elevated",
            "bg-white border-2 border-brand-blue shadow-card":
              variant === "accent",
          },
          // Padding
          {
            "p-4": padding === "sm",
            "p-card": padding === "md",
            "p-8": padding === "lg",
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

Card.displayName = "Card"
export default Card
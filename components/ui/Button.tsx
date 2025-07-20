import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-button font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          {
            "bg-brand-blue text-white shadow-button hover:bg-blue-600 hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0": 
              variant === "primary",
            "bg-white border-2 border-border-light text-text-primary hover:border-brand-blue hover:text-brand-blue": 
              variant === "secondary",
            "bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white": 
              variant === "outline",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-button": size === "md", 
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
export default Button
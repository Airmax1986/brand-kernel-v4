"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  href?: string
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, asChild, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-button font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
    const variants = {
      primary: "bg-brand-blue text-white shadow-button hover:bg-blue-600 hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0",
      secondary: "bg-white border-2 border-border-light text-text-primary hover:border-brand-blue hover:text-brand-blue hover:shadow-card",
      outline: "bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-button",
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-button",
      lg: "px-8 py-4 text-lg",
    }
    
    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )
    
    if (href) {
      return (
        <Link 
          href={href}
          className={buttonClasses}
        >
          {children}
        </Link>
      )
    }
    
    if (asChild) {
      return (
        <div className={buttonClasses}>
          {children}
        </div>
      )
    }
    
    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
export default Button

"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "subtle"
  hover?: boolean
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-border-light shadow-card",
      accent: "bg-white border-2 border-brand-blue shadow-button",
      subtle: "bg-surface-subtle border border-border-light",
    }
    
    const hoverEffect = hover 
      ? "hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
      : ""
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-card p-card",
          variants[variant],
          hoverEffect,
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

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  )
)

CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-h3 font-semibold text-text-primary", className)}
      {...props}
    >
      {children}
    </h3>
  )
)

CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-body text-text-secondary", className)}
      {...props}
    />
  )
)

CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("pt-0", className)}
      {...props}
    />
  )
)

CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center pt-4", className)}
      {...props}
    />
  )
)

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

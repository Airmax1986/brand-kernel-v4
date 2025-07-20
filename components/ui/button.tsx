"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/types"

const buttonVariants = {
  "high-emphasis": "bg-primary text-white hover:bg-primary-hover shadow-button",
  "high-emphasis-gradient": "bg-gradient-button text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
  "medium-emphasis": "bg-background text-primary border border-text-secondary hover:bg-background-secondary hover:border-primary",
  "link": "text-primary hover:text-primary-hover underline bg-transparent hover:no-underline"
}

const buttonSizes = {
  sm: "h-10 px-4 text-body-small",
  md: "h-12 px-6 text-body",
  lg: "h-14 px-8 text-body"
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ 
  variant = "medium-emphasis", 
  size = "md", 
  className, 
  children, 
  href, 
  onClick,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = cn(
    "btn-base",
    "inline-flex items-center justify-center",
    "font-medium text-center",
    "transition-all duration-300 ease-in-out",
    "focus-visible",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    buttonVariants[variant],
    buttonSizes[size],
    className
  )

  if (href && !disabled) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export { Button }
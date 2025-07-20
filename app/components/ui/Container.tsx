"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide"
  children: React.ReactNode
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const sizeClasses = {
      default: "max-w-container",
      narrow: "max-w-narrow",
      wide: "max-w-wide",
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-container",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"
export default Container

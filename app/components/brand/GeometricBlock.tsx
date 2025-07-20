"use client"

import { cn } from "@/lib/utils"

interface GeometricBlockProps {
  color: "purple" | "coral" | "teal" | "lime" | "blue" | "pink"
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
  style?: React.CSSProperties
}

const GeometricBlock = ({ 
  color, 
  size = "md", 
  animated = false, 
  className,
  style 
}: GeometricBlockProps) => {
  const colorClasses = {
    purple: "bg-brand-purple",
    coral: "bg-brand-coral", 
    teal: "bg-brand-teal",
    lime: "bg-brand-lime",
    blue: "bg-brand-blue",
    pink: "bg-brand-pink",
  }

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  }

  return (
    <div
      className={cn(
        "rounded-geometric inline-block",
        colorClasses[color],
        sizeClasses[size],
        animated && "animate-geometric-float",
        className
      )}
      style={style}
    />
  )
}

export default GeometricBlock

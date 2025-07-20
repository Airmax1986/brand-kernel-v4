"use client"

import { cn } from "@/lib/utils"
import GeometricBlock from "@/components/brand/GeometricBlock"
import type { BrandColor } from "@/types"

interface GeometricFloatProps {
  colors?: BrandColor[]
  count?: number
  className?: string
  animated?: boolean
  sizes?: ("sm" | "md" | "lg")[]
}

const GeometricFloat = ({
  colors = ["purple", "coral", "teal", "lime", "blue", "pink"],
  count = 6,
  className,
  animated = true,
  sizes = ["sm", "md", "lg"],
}: GeometricFloatProps) => {
  const positions = [
    "top-1/4 left-1/4",
    "top-1/3 right-1/4", 
    "bottom-1/3 left-1/3",
    "bottom-1/4 right-1/3",
    "top-1/2 left-1/6",
    "bottom-1/2 right-1/6",
  ]

  const opacities = ["opacity-5", "opacity-10", "opacity-20"]

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {Array.from({ length: Math.min(count, positions.length) }).map((_, index) => {
        const color = colors[index % colors.length]
        const position = positions[index]
        const size = sizes[index % sizes.length]
        const opacity = opacities[index % opacities.length]
        const animationDelay = `delay-[${index * 200}ms]`

        return (
          <div
            key={index}
            className={cn(
              "absolute",
              position,
              opacity,
              animated && "animate-geometric-float",
              animationDelay
            )}
          >
            <GeometricBlock
              color={color}
              size={size}
              animated={animated}
            />
          </div>
        )
      })}
    </div>
  )
}

export default GeometricFloat
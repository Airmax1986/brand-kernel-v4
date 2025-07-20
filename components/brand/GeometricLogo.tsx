import GeometricBlock from "./GeometricBlock"
import { cn } from "@/lib/utils"

interface GeometricLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  animated?: boolean
  className?: string
}

const GeometricLogo = ({ size = "md", showText = true, animated = false, className }: GeometricLogoProps) => {
  const logoSizes = {
    sm: { container: "h-8", text: "text-lg", blocks: "sm" as const },
    md: { container: "h-10", text: "text-xl", blocks: "md" as const },
    lg: { container: "h-12", text: "text-2xl", blocks: "lg" as const },
  }

  const currentSize = logoSizes[size]

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Blocks */}
      <div className={cn("flex items-center", currentSize.container)}>
        <div className="grid grid-cols-2 gap-1">
          <GeometricBlock color="purple" size={currentSize.blocks} animated={animated} />
          <GeometricBlock color="coral" size={currentSize.blocks} animated={animated} />
          <GeometricBlock color="teal" size={currentSize.blocks} animated={animated} />
          <GeometricBlock color="lime" size={currentSize.blocks} animated={animated} />
        </div>
        <div className="grid grid-cols-2 gap-1 ml-1">
          <GeometricBlock color="blue" size={currentSize.blocks} animated={animated} />
          <GeometricBlock color="pink" size={currentSize.blocks} animated={animated} />
        </div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={cn(
          "font-display font-bold text-text-primary",
          currentSize.text
        )}>
          BrandKernel.io
        </span>
      )}
    </div>
  )
}

export default GeometricLogo
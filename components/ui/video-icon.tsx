"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface VideoIconProps {
  src: string
  alt?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16", 
  lg: "w-20 h-20",
  xl: "w-24 h-24 lg:w-30 lg:h-30"
}

export function VideoIcon({
  src,
  alt = "Video icon",
  size = "xl",
  className,
  autoPlay = true,
  loop = true,
  muted = true
}: VideoIconProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    console.warn(`Failed to load video: ${src}`)
  }

  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-full overflow-hidden",
        "bg-gradient-button shadow-button",
        "transition-all duration-300 hover:scale-105 hover:shadow-lg",
        sizeClasses[size],
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoadedData={handleLoadedData}
        onError={handleError}
        aria-label={alt}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
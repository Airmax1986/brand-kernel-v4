"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  direction = "up",
  duration = 1000,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getTransformClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${duration}ms]`
    
    if (isVisible) {
      return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0`
    }

    switch (direction) {
      case "up":
        return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
      case "down":
        return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`
      case "left":
        return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
      case "right":
        return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
      case "none":
        return `${baseClasses} ${durationClass} opacity-0`
      default:
        return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
    }
  }

  return (
    <div
      ref={elementRef}
      className={cn(getTransformClasses(), className)}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
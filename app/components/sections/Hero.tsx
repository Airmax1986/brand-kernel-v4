"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui"
import Badge from "@/components/ui/Badge"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { cn } from "@/lib/utils"

type BrandColor = "purple" | "coral" | "teal" | "lime" | "blue" | "pink"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const colors: BrandColor[] = ["purple", "coral", "teal", "lime", "blue"]

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <GeometricBlock 
          color="purple" 
          size="lg" 
          animated 
          className="absolute top-1/4 right-1/4 opacity-10" 
        />
        <GeometricBlock 
          color="teal" 
          size="md" 
          animated 
          className="absolute bottom-1/3 left-1/4 opacity-10" 
        />
        <GeometricBlock 
          color="coral" 
          size="xl" 
          animated 
          className="absolute top-1/2 right-1/3 opacity-5" 
        />
      </div>

      <div className="max-w-container mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <Badge variant="brand" size="lg">
                The Future of Brand Strategy is Here
              </Badge>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-display md:text-display font-display text-text-primary leading-tight">
                Discover your Brand Kernel with{" "}
                <span className="text-brand-blue">AI Dialogue</span>.
              </h1>
              
              <p className="text-body-large text-text-secondary max-w-2xl">
                The first AI dialogue platform for authentic personal branding. 
                We're building the AI that has that conversation with you – the one 
                that transforms strategic clarity into daily impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="sm:w-auto">
                Start Your Brand Discovery
              </Button>
              <Button variant="secondary" size="lg" className="sm:w-auto">
                Watch the Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-surface-subtle border-2 border-white flex items-center justify-center"
                  >
                    <GeometricBlock 
                      color={color} 
                      size="sm" 
                    />
                  </div>
                ))}
              </div>
              <p className="text-body-small text-text-secondary">
                Join <span className="font-semibold text-text-primary">500+ creators, consultants, and founders</span> who are building brands with strategic clarity.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Brand Kernel Visualization */}
            <div className="relative w-80 h-80">
              {/* Central Core */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-geometric bg-white border-2 border-brand-blue shadow-card flex items-center justify-center animate-geometric-float">
                  <div className="grid grid-cols-2 gap-1">
                    <GeometricBlock color="purple" size="sm" />
                    <GeometricBlock color="coral" size="sm" />
                    <GeometricBlock color="teal" size="sm" />
                    <GeometricBlock color="lime" size="sm" />
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                <GeometricBlock 
                  color="blue" 
                  size="lg" 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2" 
                />
                <GeometricBlock 
                  color="pink" 
                  size="md" 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2" 
                />
                <GeometricBlock 
                  color="teal" 
                  size="lg" 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2" 
                />
                <GeometricBlock 
                  color="coral" 
                  size="md" 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { cn } from "@/lib/utils"

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section bg-surface-subtle" id="founder">
      <div className="max-w-container mx-auto px-container">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-h1 font-display text-text-primary mb-4">
            Our Vision: Democratizing Brand Strategy
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Founder Portrait */}
          <div className={cn(
            "lg:col-span-1 transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <Card variant="primary" padding="lg" className="text-center">
              {/* Placeholder for founder image */}
              <div className="w-32 h-32 mx-auto mb-6 bg-surface-subtle rounded-full flex items-center justify-center border-4 border-brand-blue">
                <div className="grid grid-cols-2 gap-2">
                  <GeometricBlock color="purple" size="md" />
                  <GeometricBlock color="coral" size="md" />
                  <GeometricBlock color="teal" size="md" />
                  <GeometricBlock color="lime" size="md" />
                </div>
              </div>
              
              <h3 className="text-h3 font-display text-text-primary mb-2">
                Founder
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <GeometricBlock color="blue" size="sm" />
                <span className="text-body-small text-brand-blue font-medium">
                  20+ Years Brand Consulting
                </span>
              </div>
              
              <p className="text-body-small text-text-secondary">
                Strategic brand consultant with two decades of experience helping creators and entrepreneurs find their authentic voice.
              </p>
            </Card>
          </div>

          {/* Quote & Mission */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote */}
            <div className={cn(
              "transition-all duration-1000 ease-out delay-400",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <Card variant="accent" padding="lg" className="relative">
                <div className="absolute top-4 left-4">
                  <GeometricBlock color="purple" size="lg" className="opacity-20" />
                </div>
                
                <blockquote className="text-h3 font-display text-text-primary leading-relaxed mb-6 relative z-10">
                  "After 20+ years in brand consulting, I've learned that most creators 
                  are just one conversation away from clarity. The challenge was scaling 
                  that conversation. AI gives us the opportunity to democratize strategic 
                  brand discovery for everyone."
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <GeometricBlock color="blue" size="md" />
                  <div>
                    <p className="text-body font-semibold text-text-primary">
                      Founder, BrandKernel.io
                    </p>
                    <p className="text-body-small text-text-secondary">
                      Strategic Brand Consultant
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mission */}
            <div className={cn(
              "transition-all duration-1000 ease-out delay-600",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Card variant="elevated" padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GeometricBlock color="teal" size="xl" />
                  </div>
                  
                  <div>
                    <h3 className="text-h3 font-display text-text-primary mb-4">
                      Our Mission
                    </h3>
                    
                    <p className="text-body-large text-text-secondary mb-6">
                      To build the world's most intelligent, empathetic, and accessible 
                      brand discovery platform. We believe every creator deserves the clarity 
                      and confidence that comes from knowing their authentic brand kernel.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <GeometricBlock color="lime" size="sm" className="mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-body font-semibold text-text-primary mb-1">
                            Intelligent
                          </h4>
                          <p className="text-body-small text-text-secondary">
                            AI-powered dialogue that adapts to your unique journey
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <GeometricBlock color="coral" size="sm" className="mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-body font-semibold text-text-primary mb-1">
                            Empathetic
                          </h4>
                          <p className="text-body-small text-text-secondary">
                            Understanding the human complexity behind every brand
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <GeometricBlock color="pink" size="sm" className="mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-body font-semibold text-text-primary mb-1">
                            Accessible
                          </h4>
                          <p className="text-body-small text-text-secondary">
                            Professional-grade strategy for creators at every level
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <GeometricBlock color="blue" size="sm" className="mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-body font-semibold text-text-primary mb-1">
                            Transformative
                          </h4>
                          <p className="text-body-small text-text-secondary">
                            From strategic clarity to daily confident action
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder

"use client"

import { useEffect, useRef, useState } from "react"
import Card from "@/components/ui/Card"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { cn } from "@/lib/utils"

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  const steps = [
    {
      number: 1,
      title: "Deep Discovery",
      subtitle: "The Dialogue",
      description: "Our AI engages you in a sophisticated dialogue that uncovers your authentic brand essence through strategic questioning and reflective conversation.",
      icon: "💬",
      color: "purple" as const,
      features: ["AI-guided brand exploration", "Strategic questioning framework", "Authentic insight discovery"]
    },
    {
      number: 2,
      title: "Your Brand Kernel",
      subtitle: "The Foundation",
      description: "We distill your conversation into a comprehensive Brand Kernel that serves as your strategic foundation for all brand communications.",
      icon: "🔮",
      color: "blue" as const,
      features: ["Comprehensive brand framework", "Strategic positioning clarity", "Authentic brand essence"]
    },
    {
      number: 3,
      title: "Effortless Activation",
      subtitle: "The Flows", 
      description: "Transform your Brand Kernel into daily BrandFlows - consistent, authentic content that reinforces your strategic positioning.",
      icon: "⚡",
      color: "teal" as const,
      features: ["Automated content generation", "Brand-consistent messaging", "Strategic flow activation"]
    }
  ]

  return (
    <section ref={sectionRef} className="py-section bg-white" id="solution">
      <div className="max-w-container mx-auto px-container">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-h1 font-display text-text-primary mb-4">
            The Integrated Bridge Between Identity and Impact
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            As the only platform, we seamlessly connect deep strategic dialogue 
            with practical daily activation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <Card 
                variant={activeStep === index ? "accent" : "primary"} 
                padding="lg" 
                className="h-full relative group cursor-pointer"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm",
                      activeStep === index ? "bg-brand-blue" : "bg-text-tertiary"
                    )}>
                      {step.number}
                    </div>
                    <GeometricBlock color={step.color} size="md" animated={activeStep === index} />
                  </div>
                  <div className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-200">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-h3 font-display text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-body-small text-brand-blue font-medium uppercase tracking-wider">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-body text-text-secondary leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-small text-text-secondary">
                        <GeometricBlock color={step.color} size="sm" className="flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More */}
                <div className="mt-6 pt-4 border-t border-border-light">
                  <button className="text-brand-blue text-body-small font-medium hover:text-blue-600 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <GeometricBlock color="purple" size="sm" />
            <div className="w-16 h-0.5 bg-border-light" />
            <GeometricBlock color="blue" size="sm" />
            <div className="w-16 h-0.5 bg-border-light" />
            <GeometricBlock color="teal" size="sm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
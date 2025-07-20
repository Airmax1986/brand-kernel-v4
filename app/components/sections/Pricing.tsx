"use client"

import { useEffect, useRef, useState } from "react"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { cn } from "@/lib/utils"

const Pricing = () => {
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

  const pricingPlans = [
    {
      name: "The Brand Kernel Discovery",
      type: "One-Time Fee",
      price: "297",
      currency: "$",
      description: "A single, transformative conversation that uncovers your authentic brand kernel and strategic foundation.",
      color: "blue" as const,
      features: [
        "60-minute AI-guided brand dialogue",
        "Comprehensive Brand Kernel document",
        "Strategic positioning framework",
        "Core messaging foundations",
        "Brand essence & values clarity",
        "Lifetime access to your Brand Kernel"
      ],
      cta: "Start Your Discovery",
      popular: false
    },
    {
      name: "BrandFlows Activation",
      type: "Subscription",
      price: "97",
      currency: "$/month",
      description: "Transform your Brand Kernel into consistent, authentic daily content with our BrandFlows system.",
      color: "purple" as const,
      features: [
        "Unlimited BrandFlow generation",
        "Multi-platform content adaptation",
        "Brand consistency monitoring",
        "Strategic messaging flows",
        "Content calendar integration",
        "Priority support & updates"
      ],
      cta: "Get Started",
      popular: true
    }
  ]

  return (
    <section ref={sectionRef} className="py-section bg-surface-subtle" id="pricing">
      <div className="max-w-container mx-auto px-container">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-h1 font-display text-text-primary mb-4">
            A Strategic Investment in Your Brand's Future
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            No subscriptions for your core strategy. A simple, one-time investment 
            for clarity, and an optional subscription for daily activation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative transition-all duration-1000 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="brand" size="lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card 
                variant={plan.popular ? "accent" : "primary"} 
                padding="lg" 
                className="h-full relative group hover:scale-105 transition-transform duration-300"
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <GeometricBlock color={plan.color} size="lg" />
                    <h3 className="text-h3 font-display text-text-primary">
                      {plan.name}
                    </h3>
                  </div>
                  
                  <p className="text-body-small text-brand-blue font-medium uppercase tracking-wider mb-4">
                    {plan.type}
                  </p>
                  
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-display font-display text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-body text-text-secondary">
                      {plan.currency}
                    </span>
                  </div>
                  
                  <p className="text-body text-text-secondary">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <GeometricBlock 
                          color={plan.color} 
                          size="sm" 
                          className="flex-shrink-0 mt-1" 
                        />
                        <span className="text-body text-text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button 
                    variant={plan.popular ? "primary" : "secondary"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bridge Connector */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4 p-4 bg-white rounded-card border border-border-light">
            <GeometricBlock color="blue" size="md" />
            <span className="text-body-small text-text-secondary font-medium">
              Start with Discovery, then activate with Flows
            </span>
            <GeometricBlock color="purple" size="md" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
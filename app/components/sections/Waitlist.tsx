"use client"

import { useEffect, useRef, useState } from "react"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { cn } from "@/lib/utils"

const Waitlist = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  const benefits = [
    {
      title: "Brand Kernel Assessment",
      description: "Get early access to our brand clarity assessment tool",
      icon: "🎯",
      color: "blue" as const
    },
    {
      title: "Weekly Brand Intelligence",
      description: "Exclusive insights and strategies delivered to your inbox",
      icon: "📧",
      color: "purple" as const
    },
    {
      title: "Beta Access Priority",
      description: "Be among the first to experience the full platform",
      icon: "⚡",
      color: "teal" as const
    },
    {
      title: "Exclusive Community Access",
      description: "Join a curated community of brand-building creators",
      icon: "👥",
      color: "coral" as const
    }
  ]

  return (
    <section ref={sectionRef} className="py-section bg-white relative overflow-hidden" id="waitlist">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10">
          <GeometricBlock color="purple" size="sm" className="opacity-10" />
        </div>
        <div className="absolute top-40 right-20">
          <GeometricBlock color="teal" size="md" className="opacity-10" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <GeometricBlock color="coral" size="sm" className="opacity-10" />
        </div>
        <div className="absolute bottom-40 right-10">
          <GeometricBlock color="lime" size="lg" className="opacity-5" />
        </div>
      </div>

      <div className="max-w-narrow mx-auto px-container relative">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-h1 font-display text-text-primary mb-4">
            Reserve Your Brand Kernel Discovery
          </h2>
          <p className="text-body-large text-text-secondary">
            Join the exclusive community of creators, consultants, and founders 
            who are building brands with strategic clarity.
          </p>
        </div>

        {/* Main Card */}
        <div className={cn(
          "transition-all duration-1000 ease-out delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Card variant="elevated" padding="lg" className="text-center">
            {!isSubmitted ? (
              <>
                {/* Form */}
                <form onSubmit={handleSubmit} className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button type="submit" size="lg" className="sm:w-auto">
                      Reserve Your Spot
                    </Button>
                  </div>
                </form>

                {/* Waitlist Counter */}
                <div className="mb-8">
                  <p className="text-body-small text-text-secondary mb-2">
                    Join the waitlist
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <GeometricBlock color="blue" size="sm" animated />
                    <span className="text-h3 font-display text-text-primary">500+</span>
                    <span className="text-body text-text-secondary">creators already waiting</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                </div>
                <h3 className="text-h3 font-display text-text-primary mb-2">
                  You're on the list!
                </h3>
                <p className="text-body text-text-secondary">
                  Check your email for confirmation and next steps.
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h3 className={cn(
            "text-h3 font-display text-text-primary text-center mb-8 transition-all duration-1000 ease-out delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            What you get:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={cn(
                  "flex items-start gap-4 transition-all duration-1000 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-2xl">{benefit.icon}</span>
                  <GeometricBlock color={benefit.color} size="sm" />
                </div>
                <div>
                  <h4 className="text-body font-semibold text-text-primary mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-body-small text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Waitlist
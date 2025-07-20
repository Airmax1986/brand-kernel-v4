"use client"

import { useEffect, useRef, useState } from "react"
import Card from "@/components/ui/Card"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { cn } from "@/lib/utils"

const Problem = () => {
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

  const problems = [
    {
      title: "The Generic Trap",
      description: "Without a clear brand kernel, creators fall into generic messaging that sounds like everyone else.",
      icon: "🔄",
      consequences: ["Invisible in crowded markets", "Weak client attraction", "Inconsistent messaging"]
    },
    {
      title: "The Strategy-Execution Gap", 
      description: "Even with strategy clarity, daily content creation feels disconnected from core brand identity.",
      icon: "⚡",
      consequences: ["Daily content struggles", "Brand dilution over time", "Strategic drift"]
    }
  ]

  const solutions = [
    {
      title: "Authentic Differentiation",
      description: "A clear brand kernel creates unique positioning that naturally stands out.",
      icon: "✨",
      benefits: ["Magnetic market presence", "Premium client attraction", "Consistent brand voice"]
    },
    {
      title: "Seamless Brand Activation",
      description: "Strategic clarity flows effortlessly into daily content and communications.",
      icon: "🎯",
      benefits: ["Effortless content creation", "Strengthened brand equity", "Strategic alignment"]
    }
  ]

  return (
    <section ref={sectionRef} className="py-section bg-surface-subtle" id="problem">
      <div className="max-w-wide mx-auto px-container">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-h1 font-display text-text-primary mb-4">
            The Clarity-Action Paradox
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            Creators, freelancers, and consultants struggle with two fundamental 
            challenges that paralyze their brand development and limit their success.
          </p>
        </div>

        {/* Problem vs Solution Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems Side */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <div className="text-center">
              <h3 className="text-h2 font-display text-text-primary mb-4 flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  <GeometricBlock color="coral" size="sm" className="opacity-50" />
                  <GeometricBlock color="coral" size="sm" className="opacity-30" />
                  <GeometricBlock color="coral" size="sm" className="opacity-20" />
                </div>
                Without a Clear Brand Kernel
              </h3>
            </div>
            
            {problems.map((problem, index) => (
              <Card key={index} variant="primary" padding="lg" className="relative">
                <div className="absolute top-4 right-4 text-2xl opacity-20">
                  {problem.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-h3 font-display text-text-primary">
                    {problem.title}
                  </h4>
                  <p className="text-body text-text-secondary">
                    {problem.description}
                  </p>
                  <ul className="space-y-2">
                    {problem.consequences.map((consequence, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-small text-text-secondary">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        {consequence}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* VS Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full">
            <div className="w-px h-32 bg-border-light" />
            <div className="w-12 h-12 rounded-full bg-white border-2 border-border-light flex items-center justify-center font-bold text-text-secondary">
              VS
            </div>
            <div className="w-px h-32 bg-border-light" />
          </div>

          {/* Solutions Side */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 ease-out delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="text-center">
              <h3 className="text-h2 font-display text-text-primary mb-4 flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  <GeometricBlock color="blue" size="sm" />
                  <GeometricBlock color="teal" size="sm" />
                  <GeometricBlock color="lime" size="sm" />
                </div>
                With an Authentic Brand Kernel
              </h3>
            </div>
            
            {solutions.map((solution, index) => (
              <Card key={index} variant="accent" padding="lg" className="relative">
                <div className="absolute top-4 right-4 text-2xl">
                  {solution.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-h3 font-display text-text-primary">
                    {solution.title}
                  </h4>
                  <p className="text-body text-text-secondary">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-small text-text-secondary">
                        <GeometricBlock color="lime" size="sm" className="flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
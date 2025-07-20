"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/Card"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Strategic Dialogue",
      description: "AI-guided conversations reveal your authentic brand essence through deep questioning and reflection.",
      icon: "💬",
      color: "blue" as const,
      features: [
        "Deep brand archaeology",
        "Values & purpose extraction", 
        "Authentic voice discovery",
        "Strategic clarity mapping"
      ]
    },
    {
      number: "02", 
      title: "Brand Kernel Creation",
      description: "Your insights crystallize into a living Brand Kernel - your strategic core that guides every decision.",
      icon: "🧠",
      color: "teal" as const,
      features: [
        "Core identity synthesis",
        "Decision-making framework",
        "Value proposition clarity",
        "Brand personality definition"
      ]
    },
    {
      number: "03",
      title: "Daily Activation",
      description: "Transform your Brand Kernel into specific, actionable flows for every brand interaction and communication.",
      icon: "⚡",
      color: "purple" as const,
      features: [
        "Situation-specific guidance",
        "Communication templates",
        "Decision support system",
        "Consistent brand expression"
      ]
    }
  ]

  return (
    <section className="py-section bg-background">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 text-text-primary mb-4">
            The Integration Bridge
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            A systematic approach that transforms strategic clarity into daily impact through AI-powered dialogue and actionable frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <svg 
            className="absolute top-16 left-0 w-full h-4 pointer-events-none hidden lg:block" 
            viewBox="0 0 800 40"
          >
            <motion.path
              d="M200 20 L600 20"
              stroke="#E5E7EB"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </svg>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <Card hover className="h-full">
                <CardHeader className="text-center relative">
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: "spring", bounce: 0.4 }}
                    className="w-12 h-12 mx-auto mb-4 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-body-large"
                  >
                    {step.number}
                  </motion.div>

                  {/* Geometric Accent */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                    className="absolute -top-2 -right-2"
                  >
                    <GeometricBlock color={step.color} size="md" animated />
                  </motion.div>

                  <CardTitle className="text-h3 mb-2">
                    {step.title}
                  </CardTitle>
                  <CardDescription>
                    {step.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Icon */}
                  <div className="text-4xl text-center mb-6">
                    {step.icon}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-body-small text-text-secondary"
                      >
                        <GeometricBlock color={step.color} size="sm" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-surface-subtle px-8 py-4 rounded-card border border-border-light">
            <div className="flex items-center gap-2">
              <GeometricBlock color="blue" size="sm" />
              <span className="text-body-small text-text-secondary font-medium">STRATEGIC CLARITY</span>
            </div>
            <div className="text-text-tertiary">→</div>
            <div className="flex items-center gap-2">
              <GeometricBlock color="teal" size="sm" />
              <span className="text-body-small text-text-secondary font-medium">BRAND KERNEL</span>
            </div>
            <div className="text-text-tertiary">→</div>
            <div className="flex items-center gap-2">
              <GeometricBlock color="purple" size="sm" />
              <span className="text-body-small text-text-secondary font-medium">DAILY IMPACT</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-body-large text-text-primary font-medium mb-4">
            Ready to bridge the gap between strategy and action?
          </p>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Join creators who have transformed scattered brand moments into consistent, authentic impact through the Brand Kernel methodology.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

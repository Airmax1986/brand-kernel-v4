"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-section bg-background">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-h1 text-text-primary mb-6"
            >
              The Integrated Bridge Between Identity and Impact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-body-large text-text-secondary leading-relaxed"
            >
              As the only platform, we seamlessly connect deep strategic dialogue with practical daily activation. We solve both blockades.
            </motion.p>
          </div>

          {/* Feature Blocks */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Block 1: Deep Discovery */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden group hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <GeometricBlock key={i} color="blue" size="sm" />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-geometric flex items-center justify-center">
                    <GeometricBlock color="blue" size="md" />
                  </div>
                  <span className="text-caption text-brand-blue font-medium tracking-wide uppercase">Step 1</span>
                </div>
                
                <h3 className="text-h3 text-text-primary mb-4">
                  Deep Discovery <span className="text-text-secondary">(The Dialogue)</span>
                </h3>
                
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  An empathetic AI coach that asks the questions strategists charge thousands for.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="blue" size="sm" className="mt-1 flex-shrink-0" />
                    Deep reflection dialogues that go beyond surface-level questions.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="teal" size="sm" className="mt-1 flex-shrink-0" />
                    An implicit strategic framework guides the conversation.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="purple" size="sm" className="mt-1 flex-shrink-0" />
                    Adaptive conversation flow that adjusts to your unique context.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="coral" size="sm" className="mt-1 flex-shrink-0" />
                    Authentic core extraction to crystallize your true value.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Block 2: Brand Kernel */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden group hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-2">
                  <GeometricBlock color="purple" size="md" />
                  <GeometricBlock color="teal" size="md" />
                  <GeometricBlock color="coral" size="md" />
                  <GeometricBlock color="lime" size="md" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-geometric flex items-center justify-center">
                    <GeometricBlock color="teal" size="md" />
                  </div>
                  <span className="text-caption text-brand-teal font-medium tracking-wide uppercase">Step 2</span>
                </div>
                
                <h3 className="text-h3 text-text-primary mb-4">
                  Your Brand Kernel <span className="text-text-secondary">(The Foundation)</span>
                </h3>
                
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Your authentic core, crystallized into a dynamic, personal Brand Book.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="purple" size="sm" className="mt-1 flex-shrink-0" />
                    Purpose & Mission definition.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="coral" size="sm" className="mt-1 flex-shrink-0" />
                    Core Values articulation.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="teal" size="sm" className="mt-1 flex-shrink-0" />
                    Brand Essence crystallization.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="lime" size="sm" className="mt-1 flex-shrink-0" />
                    Shared Belief identification for community building.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Block 3: Effortless Activation */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden group hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <GeometricBlock color="lime" size="sm" />
                    <GeometricBlock color="blue" size="sm" />
                    <GeometricBlock color="pink" size="sm" />
                  </div>
                  <div className="flex gap-2">
                    <GeometricBlock color="coral" size="sm" />
                    <GeometricBlock color="purple" size="sm" />
                    <GeometricBlock color="teal" size="sm" />
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-lime/10 rounded-geometric flex items-center justify-center">
                    <GeometricBlock color="lime" size="md" />
                  </div>
                  <span className="text-caption text-green-600 font-medium tracking-wide uppercase">Step 3</span>
                </div>
                
                <h3 className="text-h3 text-text-primary mb-4">
                  Effortless Activation <span className="text-text-secondary">(The Flows)</span>
                </h3>
                
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  Automated flows that transform your kernel into compelling content—without complex prompting.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="lime" size="sm" className="mt-1 flex-shrink-0" />
                    One-click content generation based on your unique kernel.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="blue" size="sm" className="mt-1 flex-shrink-0" />
                    Kernel-based flows ensure consistency and authenticity.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="pink" size="sm" className="mt-1 flex-shrink-0" />
                    Consistency assurance across all your marketing channels.
                  </li>
                  <li className="flex items-start gap-3 text-body-small text-text-secondary">
                    <GeometricBlock color="coral" size="sm" className="mt-1 flex-shrink-0" />
                    Time-saving automation for your daily brand-building activities.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Process Flow Visualization */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Flow Arrows */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 transform -translate-y-1/2 w-16">
              <svg className="w-full h-8" viewBox="0 0 64 32" fill="none">
                <path
                  d="M4 16 L52 16 M44 8 L52 16 L44 24"
                  stroke="#5B7CFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 transform -translate-y-1/2 w-16">
              <svg className="w-full h-8" viewBox="0 0 64 32" fill="none">
                <path
                  d="M4 16 L52 16 M44 8 L52 16 L44 24"
                  stroke="#4ECDC4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-brand-blue/5 to-brand-teal/5 rounded-card p-8"
          >
            <h3 className="text-h2 text-text-primary mb-4">
              Ready to Bridge Your Identity and Impact?
            </h3>
            <p className="text-body-large text-text-secondary mb-6 max-w-2xl mx-auto">
              Join the creators who have discovered their authentic brand kernel and transformed their strategic clarity into daily impact.
            </p>
            <div className="flex justify-center gap-2">
              <GeometricBlock color="blue" size="md" animated />
              <GeometricBlock color="teal" size="md" animated style={{ animationDelay: "0.2s" }} />
              <GeometricBlock color="lime" size="md" animated style={{ animationDelay: "0.4s" }} />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

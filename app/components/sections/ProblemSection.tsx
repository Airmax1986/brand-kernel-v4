"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function ProblemSection() {
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
    <section className="py-section bg-surface-subtle">
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
              The Clarity-Action Paradox
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-body-large text-text-secondary leading-relaxed"
            >
              Creators, freelancers, and consultants struggle with two fundamental challenges that paralyze their brand development and limit their success.
            </motion.p>
          </div>

          {/* Core Problems */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Problem 1: The Generic Trap */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden"
            >
              {/* Chaos Visual Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <GeometricBlock 
                      key={i}
                      color={["purple", "coral", "teal", "lime", "blue", "pink"][i % 6] as any}
                      size="sm"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <GeometricBlock color="coral" size="md" />
                  <h3 className="text-h3 text-text-primary">The Generic Trap</h3>
                </div>
                <p className="text-body text-text-secondary leading-relaxed">
                  Without a clear brand kernel, you blend into the noise. Your content feels interchangeable, your pricing power suffers, and ideal clients can't find you.
                </p>
              </div>
            </motion.div>

            {/* Problem 2: Strategy-Execution Gap */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden"
            >
              {/* Disconnected Visual Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <div className="flex flex-col gap-4">
                  <GeometricBlock color="blue" size="md" />
                  <div className="w-8 h-px bg-border-light"></div>
                  <GeometricBlock color="teal" size="md" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <GeometricBlock color="purple" size="md" />
                  <h3 className="text-h3 text-text-primary">The Strategy-Execution Gap</h3>
                </div>
                <p className="text-body text-text-secondary leading-relaxed">
                  Even when you have clarity on paper, translating strategy into consistent daily actions feels impossible. The gap between knowing and doing kills momentum.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Consequences Comparison */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Without Brand Kernel */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-card p-8 border border-red-100"
            >
              <h4 className="text-h3 text-red-800 mb-6 flex items-center gap-3">
                <span className="text-2xl">❌</span>
                Without a Clear Brand Kernel
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body text-red-700">
                  <span className="text-red-500 mt-1">❌</span>
                  Price pressure due to interchangeability
                </li>
                <li className="flex items-start gap-3 text-body text-red-700">
                  <span className="text-red-500 mt-1">❌</span>
                  Ineffective marketing & content
                </li>
                <li className="flex items-start gap-3 text-body text-red-700">
                  <span className="text-red-500 mt-1">❌</span>
                  Weak customer loyalty & referrals
                </li>
                <li className="flex items-start gap-3 text-body text-red-700">
                  <span className="text-red-500 mt-1">❌</span>
                  Burnout from trying to be "everything for everyone"
                </li>
              </ul>
            </motion.div>

            {/* With Brand Kernel */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-card p-8 border border-green-100"
            >
              <h4 className="text-h3 text-green-800 mb-6 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                With an Authentic Brand Kernel
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body text-green-700">
                  <span className="text-green-500 mt-1">✅</span>
                  Premium pricing through differentiation
                </li>
                <li className="flex items-start gap-3 text-body text-green-700">
                  <span className="text-green-500 mt-1">✅</span>
                  Ideal clients find you magnetically
                </li>
                <li className="flex items-start gap-3 text-body text-green-700">
                  <span className="text-green-500 mt-1">✅</span>
                  Clear focus increases efficiency
                </li>
                <li className="flex items-start gap-3 text-body text-green-700">
                  <span className="text-green-500 mt-1">✅</span>
                  Fulfillment through authentic work
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Key Insight */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-brand-blue text-white rounded-card p-8 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 gap-2 h-full">
                {[...Array(32)].map((_, i) => (
                  <GeometricBlock 
                    key={i}
                    color="blue"
                    size="sm"
                    className="animate-geometric-float"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-h2 mb-4">
                Your Brand Kernel is the decisive, non-copyable competitive factor in the AI age.
              </h3>
              <div className="flex justify-center gap-2 mt-6">
                <GeometricBlock color="purple" size="md" animated />
                <GeometricBlock color="coral" size="md" animated style={{ animationDelay: "0.2s" }} />
                <GeometricBlock color="teal" size="md" animated style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

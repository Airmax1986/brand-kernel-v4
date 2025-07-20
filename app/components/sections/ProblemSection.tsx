"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Card, CardContent } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problemBlocks = [
    { color: "purple" as const, x: 20, y: 10, rotation: 15 },
    { color: "coral" as const, x: 80, y: 30, rotation: -10 },
    { color: "teal" as const, x: 40, y: 60, rotation: 25 },
    { color: "lime" as const, x: 10, y: 80, rotation: -20 },
    { color: "blue" as const, x: 70, y: 70, rotation: 30 },
    { color: "pink" as const, x: 90, y: 20, rotation: -15 },
  ]

  const solutionBlocks = [
    { color: "purple" as const, x: 10, y: 20 },
    { color: "coral" as const, x: 30, y: 20 },
    { color: "teal" as const, x: 50, y: 20 },
    { color: "lime" as const, x: 10, y: 40 },
    { color: "blue" as const, x: 30, y: 40 },
    { color: "pink" as const, x: 50, y: 40 },
  ]

  return (
    <section className="py-section bg-surface-subtle">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 text-text-primary mb-4">
            The Clarity-Action Paradox
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            You know who you are strategically, but translating that into consistent daily actions feels impossible. 
            Your brand identity remains scattered across disconnected moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Problem Side - Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card hover className="relative h-80 overflow-hidden">
              <CardContent className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-text-tertiary text-body-small font-medium mb-4">
                    ❌ <span>CURRENT STATE</span>
                  </div>
                  <h3 className="text-h2 text-text-primary mb-3">
                    Scattered Identity
                  </h3>
                  <p className="text-body text-text-secondary">
                    Your brand strategy lives in documents. Your daily actions are reactive. 
                    The gap between intention and execution grows wider every day.
                  </p>
                </div>

                {/* Chaotic Geometric Blocks */}
                <div className="absolute inset-0 pointer-events-none">
                  {problemBlocks.map((block, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                      animate={isInView ? { 
                        opacity: 0.7, 
                        scale: 1, 
                        rotate: block.rotation 
                      } : { 
                        opacity: 0, 
                        scale: 0, 
                        rotate: 0 
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        bounce: 0.3
                      }}
                      className="absolute"
                      style={{
                        left: `${block.x}%`,
                        top: `${block.y}%`,
                      }}
                    >
                      <GeometricBlock 
                        color={block.color} 
                        size="md"
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* VS Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:flex-col lg:h-full"
          >
            <div className="bg-brand-blue text-white px-6 py-3 rounded-button font-medium text-button">
              VS
            </div>
          </motion.div>

          {/* Solution Side - Order */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="accent" hover className="relative h-80 overflow-hidden">
              <CardContent className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-brand-blue text-body-small font-medium mb-4">
                    ✅ <span>DESIRED STATE</span>
                  </div>
                  <h3 className="text-h2 text-text-primary mb-3">
                    Integrated Flow
                  </h3>
                  <p className="text-body text-text-secondary">
                    Your strategic clarity flows seamlessly into every interaction. 
                    Each moment reinforces your authentic brand identity.
                  </p>
                </div>

                {/* Organized Geometric Blocks */}
                <div className="absolute inset-0 pointer-events-none">
                  {solutionBlocks.map((block, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1 
                      } : { 
                        opacity: 0, 
                        scale: 0 
                      }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + index * 0.05,
                        type: "spring",
                        bounce: 0.2
                      }}
                      className="absolute"
                      style={{
                        left: `${block.x}%`,
                        top: `${block.y}%`,
                      }}
                    >
                      <GeometricBlock 
                        color={block.color} 
                        size="md"
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-body-large text-text-primary font-medium">
            The solution isn't more strategy or more tactics.{" "}
            <span className="text-brand-blue">It's building the bridge between them.</span>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

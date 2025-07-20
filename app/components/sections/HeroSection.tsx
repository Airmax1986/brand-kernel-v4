"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Button } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Geometric animation configuration
  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section className="py-section bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-button text-body-small font-medium"
            >
              🚀 <span>AI Dialogue Platform</span>
            </motion.div>

            {/* Headlines */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-display-mobile lg:text-display text-text-primary leading-tight"
              >
                Transform Strategic{" "}
                <span className="relative">
                  Clarity
                  <GeometricBlock 
                    color="blue" 
                    size="sm" 
                    className="absolute -top-2 -right-6" 
                    animated 
                  />
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-display-mobile lg:text-display text-text-primary leading-tight"
              >
                Into Daily{" "}
                <span className="relative">
                  Impact
                  <GeometricBlock 
                    color="teal" 
                    size="sm" 
                    className="absolute -top-2 -right-6" 
                    animated 
                    style={{ animationDelay: "0.5s" }}
                  />
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-body-large text-text-secondary max-w-xl leading-relaxed"
            >
              The first AI dialogue platform for authentic personal branding. 
              Bridge the gap between who you are strategically and how you show up daily.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue border-2 border-white flex items-center justify-center text-white font-medium text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-body-small text-text-secondary">
                <span className="font-medium text-text-primary">Join 500+ creators</span>
                <br />
                transforming their brand clarity
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-button">
                Start Your Brand Discovery
              </Button>
              <Button variant="secondary" size="lg" className="text-button">
                Watch the Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Geometric Visualization */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative flex items-center justify-center h-96 lg:h-full"
          >
            {/* Central Brand Kernel */}
            <motion.div
              variants={blockVariants}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 rounded-card bg-white border-2 border-brand-blue shadow-card flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <GeometricBlock color="purple" size="sm" />
                  <GeometricBlock color="coral" size="sm" />
                  <GeometricBlock color="teal" size="sm" />
                  <GeometricBlock color="lime" size="sm" />
                </div>
              </div>
            </motion.div>

            {/* Floating Geometric Elements */}
            <motion.div
              variants={blockVariants}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-8 left-8"
            >
              <GeometricBlock color="blue" size="lg" animated />
            </motion.div>

            <motion.div
              variants={blockVariants}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute top-16 right-12"
            >
              <GeometricBlock color="pink" size="md" animated style={{ animationDelay: "1s" }} />
            </motion.div>

            <motion.div
              variants={blockVariants}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-12 left-16"
            >
              <GeometricBlock color="coral" size="md" animated style={{ animationDelay: "1.5s" }} />
            </motion.div>

            <motion.div
              variants={blockVariants}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute bottom-8 right-8"
            >
              <GeometricBlock color="lime" size="lg" animated style={{ animationDelay: "2s" }} />
            </motion.div>

            {/* Connection Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 400 400"
            >
              <motion.path
                d="M100 100 L200 200 L300 100 M100 300 L200 200 L300 300"
                stroke="#E5E7EB"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

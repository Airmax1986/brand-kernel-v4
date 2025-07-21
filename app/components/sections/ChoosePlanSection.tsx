"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Button } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function ChoosePlanSection() {
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
              A Strategic Investment in Your Brand's Future
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-body-large text-text-secondary leading-relaxed"
            >
              No subscriptions for your core strategy. A simple, one-time investment for clarity, and an optional subscription for daily activation.
            </motion.p>
          </div>

          {/* Products */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Product 1: Brand Kernel Discovery */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <GeometricBlock 
                      key={i} 
                      color={["purple", "coral", "teal", "lime"][i % 4] as any} 
                      size="sm" 
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <GeometricBlock color="blue" size="lg" />
                  <div>
                    <h3 className="text-h2 text-text-primary">The Brand Kernel Discovery</h3>
                    <span className="text-body-small text-brand-blue font-medium">One-time Investment</span>
                  </div>
                </div>

                <p className="text-body text-text-secondary mb-8 leading-relaxed">
                  A comprehensive, one-time guided process to discover, define, and crystallize your authentic brand identity. This is your permanent strategic foundation.
                </p>

                {/* Pricing Options */}
                <div className="space-y-6 mb-8">
                  {/* Individual Option */}
                  <div className="bg-gradient-to-r from-brand-blue/5 to-brand-teal/5 rounded-geometric p-6 border border-brand-blue/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-h3 text-text-primary">For Individuals & Creators</h4>
                        <p className="text-body-small text-text-secondary">Freelancer, Consultants, Solopreneure</p>
                      </div>
                      <div className="text-right">
                        <div className="text-h1 text-brand-blue font-bold">227€</div>
                        <div className="text-body-small text-text-secondary">einmalig</div>
                      </div>
                    </div>
                    <Button className="w-full">Start My Discovery</Button>
                  </div>

                  {/* Business Option */}
                  <div className="bg-gradient-to-r from-brand-purple/5 to-brand-coral/5 rounded-geometric p-6 border border-brand-purple/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-h3 text-text-primary">For Businesses & Teams</h4>
                        <p className="text-body-small text-text-secondary">Startups, Agenturen und Teams</p>
                      </div>
                      <div className="text-right">
                        <div className="text-h1 text-brand-purple font-bold">297€</div>
                        <div className="text-body-small text-text-secondary">einmalig</div>
                      </div>
                    </div>
                    <p className="text-body-small text-text-secondary mb-4">
                      Inklusive Team-Features für gemeinsame Markenbasis
                    </p>
                    <Button variant="secondary" className="w-full">Start Team Discovery</Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product 2: BrandFlows Activation */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="flex flex-col gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex gap-2">
                      <GeometricBlock color="lime" size="sm" />
                      <GeometricBlock color="teal" size="sm" />
                      <GeometricBlock color="blue" size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <GeometricBlock color="lime" size="lg" />
                  <div>
                    <h3 className="text-h2 text-text-primary">BrandFlows Activation</h3>
                    <span className="text-body-small text-green-600 font-medium">Optional Subscription</span>
                  </div>
                </div>

                <p className="text-body text-text-secondary mb-8 leading-relaxed">
                  An optional monthly subscription to activate your Brand Kernel daily. Get AI-powered content ideas, post drafts, and strategic recommendations that are always aligned with your core identity.
                </p>

                {/* Pricing Options */}
                <div className="space-y-6 mb-8">
                  {/* Individual Option */}
                  <div className="bg-gradient-to-r from-brand-lime/5 to-brand-teal/5 rounded-geometric p-6 border border-brand-lime/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-h3 text-text-primary">For Individuals & Creators</h4>
                        <p className="text-body-small text-text-secondary">Konsistente und authentische Markenumsetzung</p>
                      </div>
                      <div className="text-right">
                        <div className="text-h1 text-green-600 font-bold">19€</div>
                        <div className="text-body-small text-text-secondary">/ Monat</div>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full">Activate My Brand</Button>
                  </div>

                  {/* Business Option */}
                  <div className="bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 rounded-geometric p-6 border border-brand-blue/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-h3 text-text-primary">For Businesses & Teams</h4>
                        <p className="text-body-small text-text-secondary">Zentrale Marketing- und Vertriebsausrichtung</p>
                      </div>
                      <div className="text-right">
                        <div className="text-h1 text-brand-blue font-bold">27€</div>
                        <div className="text-body-small text-text-secondary">/ Monat</div>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full">Activate Team Brand</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Waitlist Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-brand-blue to-brand-teal text-white rounded-card p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-2 h-full">
                {[...Array(60)].map((_, i) => (
                  <GeometricBlock 
                    key={i}
                    color="blue"
                    size="sm"
                    className="animate-geometric-float"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-h1 mb-6">Reserve Your Brand Kernel Discovery</h3>
              <p className="text-body-large mb-8 opacity-90">
                Join the exclusive community of creators discovering their authentic brand. Get immediate access to valuable tools and insights just by joining the waitlist.
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GeometricBlock color="lime" size="sm" className="mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Brand Kernel Assessment</h4>
                      <p className="text-body-small opacity-80">A 3-minute tool that gives you immediate insights into your brand core. Delivered via email.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GeometricBlock color="coral" size="sm" className="mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Weekly Brand Intelligence</h4>
                      <p className="text-body-small opacity-80">Curated strategic insights, framework deep-dives, and creator success stories every Wednesday.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GeometricBlock color="purple" size="sm" className="mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Beta Access Priority</h4>
                      <p className="text-body-small opacity-80">Exclusive early access to the platform. Be among the first 100 users.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GeometricBlock color="pink" size="sm" className="mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Exclusive Community Access</h4>
                      <p className="text-body-small opacity-80">Join a private community with peers, live Q&As, and direct feedback.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-50">
                Reserve Your Spot on the Waitlist
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

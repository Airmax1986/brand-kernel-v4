"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function Founder() {
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
              Our Vision: Democratizing Brand Strategy
            </motion.h2>
          </div>

          {/* Founder Quote & Vision */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Founder Quote */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-card p-8 shadow-card border border-border-light relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <GeometricBlock 
                      key={i} 
                      color={["purple", "coral", "teal"][i % 3] as any} 
                      size="sm" 
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-brand-blue/10 rounded-geometric flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <blockquote className="text-body-large text-text-primary mb-6 leading-relaxed italic">
                  "After 20+ years in brand consulting, I've learned that most creators are just one conversation away from clarity. Traditional consulting is powerful but not scalable. BrandKernel.io makes that deep strategic dialogue accessible to everyone."
                </blockquote>

                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                    MA
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Maximilian Appelt</div>
                    <div className="text-body-small text-text-secondary">Founder & CEO, BrandKernel.io</div>
                  </div>
                </footer>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <GeometricBlock color="teal" size="lg" />
                <h3 className="text-h2 text-text-primary">Our Mission</h3>
              </div>

              <p className="text-body-large text-text-secondary leading-relaxed">
                To build the world's most intelligent, empathetic, and accessible brand discovery platform. We combine the depth of strategic consulting with the scalability of AI, creating a new category: <strong className="text-text-primary">Dialogical Brand Intelligence</strong>.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <GeometricBlock color="blue" size="md" className="mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-h3 text-text-primary mb-2">Intelligent</h4>
                    <p className="text-body text-text-secondary">AI that understands the nuances of personal branding and asks the right questions at the right time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <GeometricBlock color="coral" size="md" className="mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-h3 text-text-primary mb-2">Empathetic</h4>
                    <p className="text-body text-text-secondary">Technology that feels human, understanding your unique journey and challenges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <GeometricBlock color="lime" size="md" className="mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-h3 text-text-primary mb-2">Accessible</h4>
                    <p className="text-body text-text-secondary">Professional-grade brand strategy available to everyone, not just those who can afford expensive consultants.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 rounded-card p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-4">
                {[...Array(40)].map((_, i) => (
                  <GeometricBlock 
                    key={i}
                    color={["purple", "coral", "teal", "lime", "blue", "pink"][i % 6] as any}
                    size="md"
                    className="animate-geometric-float"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-h1 text-text-primary mb-6">
                A World Where Every Creator Has Strategic Clarity
              </h3>
              <p className="text-body-large text-text-secondary leading-relaxed mb-8">
                We envision a future where authentic personal branding isn't a luxury reserved for the few, but a fundamental right accessible to every creator, consultant, and entrepreneur who wants to make a meaningful impact.
              </p>
              
              <div className="flex justify-center gap-2">
                <GeometricBlock color="purple" size="lg" animated />
                <GeometricBlock color="coral" size="lg" animated style={{ animationDelay: "0.2s" }} />
                <GeometricBlock color="teal" size="lg" animated style={{ animationDelay: "0.4s" }} />
                <GeometricBlock color="lime" size="lg" animated style={{ animationDelay: "0.6s" }} />
                <GeometricBlock color="blue" size="lg" animated style={{ animationDelay: "0.8s" }} />
                <GeometricBlock color="pink" size="lg" animated style={{ animationDelay: "1.0s" }} />
              </div>
            </div>
          </motion.div>

          {/* Stats or Achievements */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <GeometricBlock color="blue" size="lg" />
              </div>
              <div className="text-h1 text-brand-blue font-bold mb-2">20+</div>
              <div className="text-body text-text-secondary">Years of Brand Consulting Experience</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <GeometricBlock color="teal" size="lg" />
              </div>
              <div className="text-h1 text-brand-teal font-bold mb-2">500+</div>
              <div className="text-body text-text-secondary">Creators Already Building Clarity</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <GeometricBlock color="lime" size="lg" />
              </div>
              <div className="text-h1 text-green-600 font-bold mb-2">1</div>
              <div className="text-body text-text-secondary">Conversation Away from Your Brand Kernel</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Founder

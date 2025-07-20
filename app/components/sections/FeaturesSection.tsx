"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button, Card, Container } from "@/components/ui"
import { FEATURE_CARDS } from "@/lib/constants"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-large-spacing">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-2 font-bold text-text-primary mb-4">
            What Brand Kernel v4 can help you do
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            From writing and reasoning to coding and analysis, Brand Kernel v4 gives you versatile help for any task.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-section-gap">
          {FEATURE_CARDS.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card variant="feature" className="p-0">
                <div className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 
                  ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
                `}>
                  {/* Content */}
                  <div className={`
                    flex flex-col justify-center p-8 lg:p-12 space-y-6
                    ${index % 2 === 1 ? 'lg:col-start-2' : ''}
                  `}>
                    <div>
                      <h3 className="text-headline-3 font-bold text-text-primary mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-body text-text-secondary leading-relaxed mb-6">
                        {feature.description}
                      </p>
                    </div>
                    
                    <Button 
                      href={feature.learnMoreHref}
                      variant="link"
                      className="justify-start p-0 text-left group"
                    >
                      <span>Learn more</span>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path 
                          fill="currentColor" 
                          d="M6.22 3.22a.75.75 0 011.06 0L11.56 7.5a.75.75 0 010 1.06l-4.28 4.28a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                        />
                      </svg>
                    </Button>
                  </div>

                  {/* Media */}
                  <div className={`
                    flex items-center justify-center p-8 lg:p-12
                    ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  `}>
                    <div className="w-full max-w-md aspect-square relative overflow-hidden rounded-card">
                      {feature.mediaType === 'video' ? (
                        <video
                          src={feature.mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={feature.mediaSrc}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
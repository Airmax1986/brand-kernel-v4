"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, Container } from "@/components/ui"
import { CHOOSE_PLAN_OPTIONS } from "@/lib/constants"

export function ChoosePlanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="choose-a-plan" className="py-large-spacing bg-background-blue">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-2 font-bold text-text-primary mb-4">
            Choose the right plan for you
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Whether you're an individual, business, or educational institution, we have a Brand Kernel v4 solution tailored for your needs.
          </p>
        </motion.div>

        {/* Plan Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHOOSE_PLAN_OPTIONS.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <a
                href={option.href}
                className="block group focus-visible"
                aria-label={`Learn more about ${option.title} plans`}
              >
                <Card className="h-full p-8 text-center hover:shadow-card transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        className="text-white"
                        aria-hidden="true"
                      >
                        {/* Different icons based on option type */}
                        {option.id === 'consumer' && (
                          <path 
                            fill="currentColor" 
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          />
                        )}
                        {option.id === 'business' && (
                          <path 
                            fill="currentColor" 
                            d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
                          />
                        )}
                        {option.id === 'enterprise' && (
                          <path 
                            fill="currentColor" 
                            d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
                          />
                        )}
                        {option.id === 'education' && (
                          <path 
                            fill="currentColor" 
                            d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
                          />
                        )}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-text-secondary text-body-small leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex justify-center mt-6">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      className="text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <path 
                        fill="currentColor" 
                        d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
                        transform="rotate(180 10 10)"
                      />
                    </svg>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary text-body-small mb-4">
            Need help choosing the right plan?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-medium transition-colors duration-200 focus-visible"
          >
            <span>Contact our sales team</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              aria-hidden="true"
            >
              <path 
                fill="currentColor" 
                d="M6.22 3.22a.75.75 0 011.06 0L11.56 7.5a.75.75 0 010 1.06l-4.28 4.28a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
              />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
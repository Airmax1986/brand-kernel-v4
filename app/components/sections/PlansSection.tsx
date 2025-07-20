"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button, Card, CardHeader, CardContent, CardFooter, Container } from "@/components/ui"
import { PLANS } from "@/lib/constants"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function PlansSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="plans" className="py-large-spacing bg-background-secondary">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-2 font-bold text-text-primary mb-4">
            Choose your Brand Kernel experience
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            From personal use to enterprise solutions, find the right plan for your needs.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-button text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </span>
                </div>
              )}

              <Card 
                variant="plan" 
                className={cn(
                  "h-full flex flex-col relative",
                  plan.popular && "border-2 border-primary shadow-lg"
                )}
              >
                <CardHeader>
                  <h3 className="text-headline-3 font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1">
                  {/* Pricing */}
                  <div className="mb-6">
                    {plan.price === 0 ? (
                      <div className="text-headline-2 font-bold text-text-primary">
                        Free
                      </div>
                    ) : (
                      <div className="flex items-baseline space-x-1">
                        <span className="text-headline-2 font-bold text-text-primary">
                          {formatPrice(plan.price)}
                        </span>
                        {plan.period && (
                          <span className="text-text-secondary">
                            /{plan.period}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          className="text-primary mt-1 flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path 
                            fill="currentColor" 
                            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                          />
                        </svg>
                        <span className="text-text-primary text-body-small">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    href={plan.id === 'pro' ? '#signup' : '#contact'}
                    variant={plan.ctaVariant === 'high-emphasis' ? 'high-emphasis-gradient' : 'medium-emphasis'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-text-secondary text-body-small">
            All plans include access to Brand Kernel's core capabilities. Higher tiers unlock advanced features and priority support.
          </p>
          <Button variant="link" href="#compare">
            Compare all features
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
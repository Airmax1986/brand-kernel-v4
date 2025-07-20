"use client"

import { motion } from "framer-motion"
import { Button, Container, GradientText, VideoIcon } from "@/components/ui"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-header-height">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Video Icon */}
            <div className="flex justify-center mb-8">
              <VideoIcon 
                src="/videos/spark-icon.mp4"
                alt="Brand Kernel Spark Animation"
                size="xl"
                className="animate-pulse"
              />
            </div>

            {/* Eyebrow Text */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-text-secondary text-body uppercase tracking-wider font-medium"
            >
              Meet Brand Kernel v4
            </motion.p>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-display-mobile lg:text-display font-bold leading-tight"
            >
              Your AI assistant{" "}
              <GradientText>
                revolutionized
              </GradientText>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-body text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              Brand Kernel v4 gives you direct access to advanced AI. Get help with writing, planning, learning, and more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button 
                href="#plans" 
                variant="high-emphasis-gradient"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Try Brand Kernel
              </Button>
              <Button 
                href="#features" 
                variant="medium-emphasis"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Learn more
              </Button>
            </motion.div>

            {/* Features Preview */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-12 flex flex-wrap justify-center gap-6 text-sm text-text-secondary"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Text & reasoning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Multimodal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Code generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Advanced reasoning</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            className="text-text-secondary"
            aria-hidden="true"
          >
            <path 
              fill="currentColor" 
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container, Button } from "@/components/ui"
import GeometricBlock from "@/components/brand/GeometricBlock"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "The Approach", href: "#approach" },
    { label: "The Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-light shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Brand Kernel Logo */}
            <div className="flex items-center gap-1 p-2 bg-white rounded-geometric border border-border-light shadow-subtle">
              <GeometricBlock color="purple" size="sm" />
              <GeometricBlock color="teal" size="sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-body font-bold text-text-primary">BrandKernel</span>
              <span className="text-caption text-text-tertiary leading-none">.io</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-body text-text-secondary hover:text-text-primary transition-colors relative group"
                whileHover={{ y: -1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button href="#discovery" className="hidden sm:inline-flex">
              Start Your Discovery
            </Button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </motion.nav>
  )
}

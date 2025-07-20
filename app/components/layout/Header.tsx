"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button, Container } from "@/components/ui"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-header",
          "h-header-height bg-background/95 backdrop-blur-sm",
          "transition-all duration-300",
          isScrolled && "border-b border-border shadow-sm"
        )}
      >
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus-visible"
              aria-label="Brand Kernel Home"
            >
              <div className="flex items-center space-x-2">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  className="text-primary"
                  aria-hidden="true"
                >
                  <path 
                    fill="currentColor" 
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
                <span className="hidden sm:block font-medium text-lg">
                  Brand Kernel v4
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Navigation />
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button 
                href="#plans" 
                variant="high-emphasis-gradient"
                size="md"
                className="hidden sm:inline-flex"
              >
                Try Brand Kernel
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-lg",
                  "text-text-primary hover:bg-background-secondary",
                  "focus-visible transition-colors duration-200"
                )}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  className={cn(
                    "transition-transform duration-200",
                    isMobileMenuOpen && "rotate-90"
                  )}
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path 
                      fill="currentColor" 
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  ) : (
                    <path 
                      fill="currentColor" 
                      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}
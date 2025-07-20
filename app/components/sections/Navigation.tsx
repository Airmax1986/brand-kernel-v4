"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import GeometricLogo from "@/components/brand/GeometricLogo"
import Button from "@/components/ui/Button"
import { NAV_LINKS } from "@/lib/constants"

const Navigation = () => {
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-border-light shadow-subtle" : "bg-transparent"
    )}>
      <div className="max-w-container mx-auto px-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <GeometricLogo size="md" animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#signin"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              Sign In
            </Link>
            <Button size="md">
              Start Your Discovery
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border-light bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="#signin"
                  className="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Sign In
                </Link>
                <div className="px-3">
                  <Button size="md" className="w-full">
                    Start Your Discovery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { scrollToElement } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1)
      scrollToElement(elementId)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div 
        className={cn(
          "fixed top-header-height left-0 right-0 bottom-0 z-50",
          "bg-background border-t border-border lg:hidden",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-grid-padding py-6 space-y-6">
            {/* Navigation Links */}
            <nav className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.label} className="space-y-2">
                  {item.hasDropdown && item.items ? (
                    <>
                      <div className="font-medium text-text-secondary text-sm uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="space-y-2 pl-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(subItem.href)
                            }}
                            className={cn(
                              "block py-2 text-text-primary hover:text-primary",
                              "transition-colors duration-200 focus-visible"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={cn(
                        "block py-3 text-lg font-medium",
                        "text-text-primary hover:text-primary",
                        "transition-colors duration-200 focus-visible"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="pt-6 border-t border-border">
              <Button 
                href="#plans" 
                variant="high-emphasis-gradient"
                size="lg"
                className="w-full"
                onClick={onClose}
              >
                Try Brand Kernel
              </Button>
            </div>

            {/* Additional Links */}
            <div className="space-y-4 text-sm text-text-secondary">
              <Link 
                href="#help" 
                className="block hover:text-primary transition-colors duration-200"
                onClick={onClose}
              >
                Help Center
              </Link>
              <Link 
                href="#privacy" 
                className="block hover:text-primary transition-colors duration-200"
                onClick={onClose}
              >
                Privacy & Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
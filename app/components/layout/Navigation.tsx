"use client"

import { useState } from "react"
import Link from "next/link"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { scrollToElement } from "@/lib/utils"

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1)
      scrollToElement(elementId)
    }
  }

  return (
    <nav className="flex items-center space-x-6" role="navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <div 
          key={item.label}
          className="relative"
          onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {item.hasDropdown ? (
            <button
              className={cn(
                "flex items-center space-x-1 px-3 py-2 rounded-lg",
                "text-text-primary hover:text-primary hover:bg-background-secondary",
                "transition-colors duration-200 focus-visible"
              )}
              aria-expanded={activeDropdown === item.label}
              aria-haspopup="true"
            >
              <span className="font-medium">{item.label}</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16"
                className={cn(
                  "transition-transform duration-200",
                  activeDropdown === item.label && "rotate-180"
                )}
                aria-hidden="true"
              >
                <path 
                  fill="currentColor" 
                  d="M4.427 6.573L8 10.146l3.573-3.573.854.854L8 11.854 3.573 7.427l.854-.854z"
                />
              </svg>
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className={cn(
                "px-3 py-2 rounded-lg font-medium",
                "text-text-primary hover:text-primary hover:bg-background-secondary",
                "transition-colors duration-200 focus-visible"
              )}
            >
              {item.label}
            </Link>
          )}

          {/* Dropdown Menu */}
          {item.hasDropdown && item.items && (
            <div 
              className={cn(
                "absolute top-full left-0 mt-2 min-w-[200px]",
                "bg-background border border-border rounded-lg shadow-card",
                "transition-all duration-200 origin-top",
                activeDropdown === item.label 
                  ? "opacity-100 scale-100 visible" 
                  : "opacity-0 scale-95 invisible"
              )}
            >
              <div className="py-2">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(subItem.href)
                      setActiveDropdown(null)
                    }}
                    className={cn(
                      "block px-4 py-2 text-text-primary",
                      "hover:text-primary hover:bg-background-secondary",
                      "transition-colors duration-200 focus-visible"
                    )}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
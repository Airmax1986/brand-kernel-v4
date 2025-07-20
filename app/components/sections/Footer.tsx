"use client"

import Link from "next/link"
import { Button } from "@/components/ui"
import Input from "@/components/ui/Input"
import GeometricLogo from "@/components/brand/GeometricLogo"
import GeometricBlock from "@/components/brand/GeometricBlock"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { useState } from "react"

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", newsletterEmail)
    setNewsletterEmail("")
  }

  return (
    <footer className="bg-surface-subtle border-t border-border-light">
      {/* Geometric Divider */}
      <div className="w-full h-1 bg-white flex">
        <div className="flex-1 bg-brand-purple" />
        <div className="flex-1 bg-brand-coral" />
        <div className="flex-1 bg-brand-teal" />
        <div className="flex-1 bg-brand-lime" />
        <div className="flex-1 bg-brand-blue" />
        <div className="flex-1 bg-brand-pink" />
      </div>

      <div className="max-w-container mx-auto px-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <GeometricLogo size="lg" />
              </div>
              
              <p className="text-body text-text-secondary mb-8 max-w-md">
                The AI dialogue platform for authentic personal branding. 
                Transforming strategic clarity into daily impact for creators, 
                consultants, and founders worldwide.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-body font-semibold text-text-primary mb-4">
                  Stay Updated
                </h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" variant="outline">
                    Subscribe
                  </Button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-body font-semibold text-text-primary mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      <span className="text-xl">{social.icon}</span>
                      <GeometricBlock 
                        color={["purple", "coral", "teal", "blue"][index] as "purple" | "coral" | "teal" | "blue"} 
                        size="sm" 
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-body font-semibold text-text-primary mb-6 flex items-center gap-2">
                <GeometricBlock color="blue" size="sm" />
                Product
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-body font-semibold text-text-primary mb-6 flex items-center gap-2">
                <GeometricBlock color="teal" size="sm" />
                Support
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-body font-semibold text-text-primary mb-6 flex items-center gap-2">
                <GeometricBlock color="coral" size="sm" />
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-body-small text-text-secondary">
                © 2025 BrandKernel.io. All rights reserved.
              </p>
              <div className="flex gap-1">
                <GeometricBlock color="purple" size="sm" className="opacity-50" />
                <GeometricBlock color="coral" size="sm" className="opacity-50" />
                <GeometricBlock color="teal" size="sm" className="opacity-50" />
              </div>
            </div>
            
            <div className="flex gap-6">
              {FOOTER_LINKS.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body-small text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

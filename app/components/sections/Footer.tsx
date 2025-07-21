"use client"

import Link from "next/link"
import GeometricBlock from "@/components/brand/GeometricBlock"

const Footer = () => {
  const platformLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Live Demo", href: "#demo" },
    { label: "Brand Flows", href: "#flows" },
    { label: "Templates", href: "#templates" },
  ]

  const resourceLinks = [
    { label: "Blog", href: "#blog" },
    { label: "Brand Guide", href: "#guide" },
    { label: "Case Studies", href: "#cases" },
    { label: "Community", href: "#community" },
  ]

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Impressum", href: "#impressum" },
  ]

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/company/brandkernel", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/brandkernelio", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
  ]

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
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo & Mission Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {/* Brand Logo */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 p-2 bg-white rounded-geometric border border-border-light shadow-subtle">
                    <GeometricBlock color="purple" size="sm" />
                    <GeometricBlock color="teal" size="sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body font-bold text-text-primary">BrandKernel</span>
                    <span className="text-caption text-text-tertiary leading-none">.io</span>
                  </div>
                </div>
              </div>
              
              <p className="text-body text-text-secondary mb-8 leading-relaxed">
                The first AI dialogue platform for personal branding. Discover your Brand Kernel and activate your authentic brand identity daily.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-geometric border border-border-light text-text-secondary hover:text-text-primary hover:border-brand-blue transition-all duration-200 shadow-subtle hover:shadow-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Platform Column */}
            <div>
              <h4 className="text-body font-semibold text-text-primary mb-6 flex items-center gap-2">
                <GeometricBlock color="blue" size="sm" />
                Platform
              </h4>
              <ul className="space-y-3">
                {platformLinks.map((link) => (
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

            {/* Resources Column */}
            <div>
              <h4 className="text-body font-semibold text-text-primary mb-6 flex items-center gap-2">
                <GeometricBlock color="teal" size="sm" />
                Resources
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
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

            {/* Company Column */}
            <div>
              <h4 className="text-body font-semibold text-text-primary mb-6 flex items-center gap-2">
                <GeometricBlock color="coral" size="sm" />
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
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
            
            <div className="flex items-center gap-2 text-body-small text-text-secondary">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>for authentic brands.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import Link from "next/link"
import { Container } from "@/components/ui"
import { FOOTER_LINKS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border mt-large-spacing">
      <Container>
        <div className="py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Kernel Logo & Description */}
            <div className="lg:col-span-2">
              <Link 
                href="https://brand-kernel.com" 
                className="inline-block mb-4 focus-visible"
                aria-label="Brand Kernel Homepage"
              >
                <svg 
                  width="150" 
                  height="40" 
                  viewBox="0 0 300 80" 
                  className="text-text-primary"
                  aria-hidden="true"
                >
                  <text 
                    x="10" 
                    y="50" 
                    fontSize="24" 
                    fontWeight="700" 
                    fill="currentColor"
                    fontFamily="Brand Kernel, sans-serif"
                  >
                    Brand Kernel v4
                  </text>
                </svg>
              </Link>
              <p className="text-text-secondary text-body-small leading-relaxed max-w-md">
                Brand Kernel v4 is your AI assistant. Get help with writing, planning, learning, and more.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-medium text-text-primary mb-4">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 focus-visible"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-medium text-text-primary mb-4">Support</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 focus-visible"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {/* Language Selector */}
              <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 focus-visible">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path 
                    fill="currentColor" 
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  />
                </svg>
                <span className="text-sm">English (US)</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-text-secondary text-sm">
              <span>© 2024 Brand Kernel LLC</span>
              <Link 
                href="#privacy" 
                className="hover:text-primary transition-colors duration-200 focus-visible"
              >
                Privacy
              </Link>
              <Link 
                href="#terms" 
                className="hover:text-primary transition-colors duration-200 focus-visible"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
import type { BrandColor, NavLink, SocialLink, FooterLinkGroup } from "@/types"

// Brand Colors
export const BRAND_COLORS: Record<BrandColor, string> = {
  purple: "#B865D6",
  coral: "#FF6B6B",
  teal: "#4ECDC4",
  lime: "#95E1A3",
  blue: "#5B7CFA",
  pink: "#E8B4E3",
}

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { href: "#approach", label: "The Approach" },
  { href: "#product", label: "The Product" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#about", label: "About" },
]

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Twitter", href: "https://twitter.com/brandkernelio", icon: "🐦" },
  { name: "LinkedIn", href: "https://linkedin.com/company/brandkernelio", icon: "💼" },
  { name: "GitHub", href: "https://github.com/brandkernelio", icon: "💻" },
  { name: "YouTube", href: "https://youtube.com/@brandkernelio", icon: "📺" },
]

// Footer Links
export const FOOTER_LINKS: FooterLinkGroup = {
  product: [
    { name: "The Approach", href: "#approach" },
    { name: "The Product", href: "#product" },
    { name: "Pricing", href: "#pricing" },
    { name: "Demo", href: "#demo" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Brand Guidelines", href: "#brand" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
}

// Animation Delays
export const ANIMATION_DELAYS = {
  immediate: 0,
  short: 200,
  medium: 400,
  long: 600,
  extraLong: 800,
}

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// Site Metadata
export const SITE_CONFIG = {
  name: "BrandKernel.io",
  description: "The first AI dialogue platform for authentic personal branding. Transform strategic clarity into daily impact.",
  url: "https://brandkernel.io",
  ogImage: "https://brandkernel.io/og-image.jpg",
  twitter: "@brandkernelio",
}

// Pricing Configuration
export const PRICING_CONFIG = {
  discovery: {
    price: 297,
    currency: "USD",
    features: 6,
  },
  flows: {
    price: 97,
    currency: "USD",
    billing: "monthly",
    features: 6,
  },
}

// Content Configuration
export const CONTENT_CONFIG = {
  waitlistCount: 500,
  founderExperience: "20+",
  heroStats: {
    creators: "500+",
    userTypes: ["creators", "consultants", "founders"],
  },
}
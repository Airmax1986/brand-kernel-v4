export const NAVIGATION_ITEMS = [
  {
    label: 'Capabilities',
    href: '#features',
    hasDropdown: true,
    items: [
      { label: 'Text & reasoning', href: '#text-reasoning' },
      { label: 'Multimodal', href: '#multimodal' },
      { label: 'Code', href: '#code' },
      { label: 'Advanced reasoning', href: '#advanced-reasoning' },
    ]
  },
  {
    label: 'Pricing',
    href: '#plans',
    hasDropdown: false,
  },
  {
    label: 'Safety',
    href: '#safety',
    hasDropdown: false,
  },
] as const

export const FEATURE_CARDS = [
  {
    id: 'text-reasoning',
    title: 'Text & reasoning',
    description: 'Generate high-quality text and engage in sophisticated reasoning across diverse topics.',
    mediaType: 'video' as const,
    mediaSrc: '/videos/text-reasoning.mp4',
    learnMoreHref: '#text-reasoning',
  },
  {
    id: 'multimodal',
    title: 'Multimodal',
    description: 'Upload images and PDFs to analyze, extract information, and get insights.',
    mediaType: 'video' as const,
    mediaSrc: '/videos/multimodal.mp4',
    learnMoreHref: '#multimodal',
  },
  {
    id: 'code',
    title: 'Code',
    description: 'Generate, debug, and explain code in 20+ programming languages.',
    mediaType: 'video' as const,
    mediaSrc: '/videos/code.mp4',
    learnMoreHref: '#code',
  },
  {
    id: 'advanced-reasoning',
    title: 'Advanced reasoning',
    description: 'Tackle complex, multi-step problems with deeper analysis and logical thinking.',
    mediaType: 'image' as const,
    mediaSrc: '/images/advanced-reasoning.jpg',
    learnMoreHref: '#advanced-reasoning',
  },
] as const

export const PLANS = [
  {
    id: 'free',
    name: 'Brand Kernel',
    price: 0,
    period: null,
    description: 'Our helpful AI assistant',
    features: [
      'Chat with Brand Kernel',
      'Multimodal prompting',
      'Upload & analyze files',
      'Use Brand Kernel in Workspace',
    ],
    cta: 'Get started',
    ctaVariant: 'medium' as const,
    popular: false,
  },
  {
    id: 'pro',
    name: 'Brand Kernel Advanced',
    price: 20,
    period: 'month',
    description: 'Our most capable AI model',
    features: [
      'Best model performance',
      'Priority access to new features',
      '2M context window',
      '2TB of storage',
      'Brand Kernel in Email, Docs & more',
    ],
    cta: 'Start free trial',
    ctaVariant: 'high-emphasis' as const,
    popular: true,
  },
  {
    id: 'ultra',
    name: 'Brand Kernel Business',
    price: 24,
    period: 'user/month',
    description: 'For teams and businesses',
    features: [
      'Advanced model performance',
      'Enhanced security & privacy',
      'Admin console',
      'Priority support',
      'Team collaboration tools',
    ],
    cta: 'Contact sales',
    ctaVariant: 'medium' as const,
    popular: false,
  },
] as const

// CRITICAL FIX: Add missing CHOOSE_PLAN_OPTIONS that was causing build errors
export const CHOOSE_PLAN_OPTIONS = [
  {
    id: 'consumer',
    title: 'Consumer',
    description: 'For personal use and individual productivity',
    icon: '/icons/consumer.svg',
    href: '#plans',
  },
  {
    id: 'business',
    title: 'Business',
    description: 'For teams and small to medium businesses',
    icon: '/icons/business.svg',
    href: '#business',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'For large organizations with advanced needs',
    icon: '/icons/enterprise.svg',
    href: '#enterprise',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'For students, teachers, and educational institutions',
    icon: '/icons/education.svg',
    href: '#education',
  },
] as const

export const INSTAGRAM_POSTS = [
  {
    id: '1',
    imageUrl: '/images/instagram/post-1.jpg',
    href: 'https://instagram.com/p/example1',
    alt: 'Brand Kernel Instagram post 1',
  },
  {
    id: '2',
    imageUrl: '/images/instagram/post-2.jpg',
    href: 'https://instagram.com/p/example2',
    alt: 'Brand Kernel Instagram post 2',
  },
  {
    id: '3',
    imageUrl: '/images/instagram/post-3.jpg',
    href: 'https://instagram.com/p/example3',
    alt: 'Brand Kernel Instagram post 3',
  },
] as const

export const FOOTER_LINKS = {
  company: [
    { label: 'About Brand Kernel', href: '#about' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ],
  support: [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact', href: '#contact' },
    { label: 'Community', href: '#community' },
  ],
} as const

// Legacy constants for backward compatibility
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

// Navigation Links (Legacy)
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

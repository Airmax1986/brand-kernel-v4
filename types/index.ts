export interface NavigationItem {
  label: string
  href: string
  hasDropdown: boolean
  items?: NavigationSubItem[]
}

export interface NavigationSubItem {
  label: string
  href: string
}

export interface FeatureCard {
  id: string
  title: string
  description: string
  mediaType: 'video' | 'image'
  mediaSrc: string
  learnMoreHref: string
}

export interface PlanCard {
  id: string
  name: string
  price: number
  period: string | null
  description: string
  features: string[]
  cta: string
  ctaVariant: 'high-emphasis' | 'medium' | 'link'
  popular: boolean
}

export interface ChoosePlanOption {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

export interface InstagramPost {
  id: string
  imageUrl: string
  href: string
  alt: string
}

export interface FooterSection {
  [key: string]: Array<{
    label: string
    href: string
  }>
}

export type ButtonVariant = 
  | 'high-emphasis' 
  | 'high-emphasis-gradient'
  | 'medium-emphasis' 
  | 'link'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// Additional types for backward compatibility and missing types
export type BrandColor = 'purple' | 'coral' | 'teal' | 'lime' | 'blue' | 'pink'

export interface NavLink {
  href: string
  label: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface FooterLinkGroup {
  [key: string]: Array<{
    name: string
    href: string
  }>
}

// Animation types
export interface AnimationDelays {
  immediate: number
  short: number
  medium: number
  long: number
  extraLong: number
}

// Breakpoint types
export interface Breakpoints {
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

// Site config types
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  twitter: string
}

// Pricing config types
export interface PricingConfig {
  discovery: {
    price: number
    currency: string
    features: number
  }
  flows: {
    price: number
    currency: string
    billing: string
    features: number
  }
}

// Content config types
export interface ContentConfig {
  waitlistCount: number
  founderExperience: string
  heroStats: {
    creators: string
    userTypes: string[]
  }
}

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
}
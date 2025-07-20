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
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Meet Brand Kernel v4 - Your AI assistant",
  description: "Brand Kernel v4 is our most advanced AI assistant. It can help with writing, planning, learning, and more.",
  keywords: ["AI", "Brand Kernel", "artificial intelligence", "assistant", "chatbot"],
  authors: [{ name: "Brand Kernel" }],
  creator: "Brand Kernel",
  publisher: "Brand Kernel",
  metadataBase: new URL('https://brand-kernel-v4.vercel.app'),
  openGraph: {
    title: "Meet Brand Kernel v4 - Your AI assistant",
    description: "Brand Kernel v4 is our most advanced AI assistant. It can help with writing, planning, learning, and more.",
    url: "https://brand-kernel-v4.vercel.app",
    siteName: "Brand Kernel v4",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Kernel v4 - Your AI assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Brand Kernel v4 - Your AI assistant",
    description: "Brand Kernel v4 is our most advanced AI assistant. It can help with writing, planning, learning, and more.",
    images: ["/images/og-image.jpg"],
    creator: "@brandkernel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1a73e8" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
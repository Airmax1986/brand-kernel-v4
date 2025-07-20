import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BrandKernel.io - AI-Powered Brand Discovery Platform",
  description: "The first AI dialogue platform for authentic personal branding. Transform strategic clarity into daily impact with our Brand Kernel Discovery and BrandFlows activation.",
  keywords: ["brand strategy", "AI branding", "personal brand", "brand discovery", "content creation", "brand kernel"],
  authors: [{ name: "BrandKernel.io" }],
  creator: "BrandKernel.io",
  publisher: "BrandKernel.io",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandkernel.io",
    title: "BrandKernel.io - AI-Powered Brand Discovery Platform",
    description: "The first AI dialogue platform for authentic personal branding. Transform strategic clarity into daily impact.",
    siteName: "BrandKernel.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandKernel.io - AI-Powered Brand Discovery Platform",
    description: "The first AI dialogue platform for authentic personal branding. Transform strategic clarity into daily impact.",
    creator: "@brandkernelio",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-text-primary`}>
        {children}
      </body>
    </html>
  )
}
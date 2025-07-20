import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Logo
        brand: {
          purple: "#B865D6",
          coral: "#FF6B6B", 
          teal: "#4ECDC4",
          lime: "#95E1A3",
          blue: "#5B7CFA",
          pink: "#E8B4E3",
        },
        // Background System
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8F9FA",
          elevated: "#FFFFFF",
        },
        // Surface System
        surface: {
          subtle: "#F8F9FA",
        },
        // Border System
        border: {
          light: "#E5E7EB",
          medium: "#D1D5DB",
          DEFAULT: "#E5E7EB",
        },
        // Text System
        text: {
          primary: "#111827",
          secondary: "#6B7280", 
          tertiary: "#9CA3AF",
          accent: "#5B7CFA",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        display: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Clean Typography Scale
        "display": ["72px", { lineHeight: "80px", fontWeight: "700", letterSpacing: "-0.02em" }],
        "display-mobile": ["36px", { lineHeight: "40px", fontWeight: "700", letterSpacing: "-0.02em" }],
        "h1": ["48px", { lineHeight: "52px", fontWeight: "600", letterSpacing: "-0.01em" }],
        "h2": ["36px", { lineHeight: "40px", fontWeight: "600", letterSpacing: "-0.01em" }],
        "h3": ["24px", { lineHeight: "28px", fontWeight: "600" }],
        "body-large": ["20px", { lineHeight: "30px", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-small": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "button": ["16px", { lineHeight: "20px", fontWeight: "500" }],
        "caption": ["12px", { lineHeight: "16px", fontWeight: "400", letterSpacing: "0.02em" }],
      },
      spacing: {
        "section": "80px",
        "container": "20px",
        "card": "24px",
        "element": "16px",
      },
      borderRadius: {
        "button": "8px",
        "card": "16px", 
        "input": "8px",
        "geometric": "4px",
      },
      boxShadow: {
        "button": "0 2px 8px rgba(91, 124, 250, 0.2)",
        "button-hover": "0 4px 12px rgba(91, 124, 250, 0.3)",
        "card": "0 1px 3px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.1)",
        "subtle": "0 1px 2px rgba(0, 0, 0, 0.05)",
      },
      maxWidth: {
        "container": "1200px",
        "narrow": "600px",
        "wide": "1400px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        "geometric-float": "geometricFloat 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        geometricFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config

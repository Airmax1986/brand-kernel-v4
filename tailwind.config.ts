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
        primary: {
          DEFAULT: "#1a73e8",
          hover: "#185abc",
          focus: "#174ea6",
        },
        background: {
          DEFAULT: "#ffffff",
          secondary: "#f8f9fa",
          blue: "#f0f4fa",
          "card-blue": "#f0f8fe",
        },
        border: {
          DEFAULT: "#dadce0",
          active: "#078efb",
        },
        text: {
          primary: "#000000",
          secondary: "#5f6368",
          link: "#1967d2",
          "link-hover": "#174ea6",
        },
      },
      backgroundImage: {
        "gradient-button": "linear-gradient(90deg, #078efb 0%, #ac87eb 66.7%)",
        "gradient-text": "linear-gradient(90deg, #078efb 0%, #ac87eb 66.7%)",
      },
      fontFamily: {
        sans: ["Brand Kernel", "Roboto", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        display: ["88px", { lineHeight: "0.9", fontWeight: "700" }],
        "display-mobile": ["40px", { lineHeight: "0.9", fontWeight: "700" }],
        "headline-1": ["56px", { lineHeight: "1.4", fontWeight: "700" }],
        "headline-2": ["48px", { lineHeight: "1.4", fontWeight: "700" }],
        "headline-3": ["40px", { lineHeight: "1.4", fontWeight: "700" }],
        body: ["20px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-small": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        "grid-padding": "20px",
        "section-gap": "40px",
        "large-spacing": "80px",
        "medium-spacing": "40px",
        "small-spacing": "20px",
        "card-padding": "24px",
        "header-height": "74px",
      },
      borderRadius: {
        button: "48px",
        card: "24px",
        "card-large": "32px",
        small: "8px",
        full: "50%",
        "60": "60px",
      },
      boxShadow: {
        button: "0 1px 4px #3c404340",
        card: "0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f",
      },
      maxWidth: {
        container: "1248px",
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1025px",
        xl: "1350px",
      },
      zIndex: {
        header: "100",
      },
      aspectRatio: {
        "video": "16/9",
        "square": "1/1",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
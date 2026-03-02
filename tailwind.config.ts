import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        base: "#0a0a0f",
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        secondary: "#8b5cf6",
        accent: "#f59e0b",
      },
      animation: {
        "morph-slow": "morph 20s ease-in-out infinite",
        "morph-slow-2": "morph2 20s ease-in-out infinite",
        "morph-slow-3": "morph3 20s ease-in-out infinite",
        "gradient-shift": "gradientShift 4s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-border": "pulseBorder 3s ease-in-out infinite",
        "svg-draw": "svgDraw 8s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" },
          "25%": { borderRadius: "60% 40% 30% 70% / 50% 60% 40% 60%" },
          "50%": { borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%" },
          "75%": { borderRadius: "30% 70% 60% 40% / 40% 60% 50% 60%" },
        },
        morph2: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "40% 60% 70% 30% / 30% 60% 40% 70%" },
          "50%": { borderRadius: "70% 30% 50% 50% / 50% 50% 30% 70%" },
          "75%": { borderRadius: "50% 50% 60% 40% / 70% 40% 60% 30%" },
        },
        morph3: {
          "0%, 100%": { borderRadius: "30% 70% 50% 50% / 50% 40% 60% 50%" },
          "33%": { borderRadius: "50% 50% 30% 70% / 40% 60% 50% 50%" },
          "66%": { borderRadius: "70% 30% 60% 40% / 60% 50% 40% 60%" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseBorder: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        svgDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

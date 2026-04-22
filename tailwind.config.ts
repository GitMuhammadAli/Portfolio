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
        "blob-drift": "blobDrift 40s linear infinite",
        "blob-drift-2": "blobDrift2 50s linear infinite",
        "blob-drift-3": "blobDrift3 45s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blobDrift: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate3d(40px, -30px, 0) rotate(180deg) scale(1.1)" },
          "100%": { transform: "translate3d(0, 0, 0) rotate(360deg) scale(1)" },
        },
        blobDrift2: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate3d(-30px, 20px, 0) rotate(-180deg) scale(0.95)" },
          "100%": { transform: "translate3d(0, 0, 0) rotate(-360deg) scale(1)" },
        },
        blobDrift3: {
          "0%": { transform: "translate3d(-50%, -50%, 0) rotate(0deg)" },
          "100%": { transform: "translate3d(-50%, -50%, 0) rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
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

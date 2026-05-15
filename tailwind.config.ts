import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Theme-aware semantic tokens. Components use `bg-bg`, `text-fg`,
        // `border-border` etc. and they auto-flip with the .dark class.
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-muted": "var(--bg-muted)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-subtle": "var(--fg-subtle)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        // Legacy aliases preserved so any unconverted callers don't crash
        base: "#09090b",
        primary: {
          DEFAULT: "#fafafa",
          foreground: "#09090b",
        },
        secondary: "#a1a1aa",
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

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0E",
        foreground: "#EDEDED",
        muted: "#9CA3AF",
        accent: "#4F46E5",
        border: "rgba(255,255,255,0.08)",
      },
      fontSize: {
        hero: ["clamp(2.8rem, 6vw, 3.5rem)", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#11120f",
        cream: "#f6f5ef",
        lime: "#d7ff59",
        purple: "#6c59ff"
      },
      fontFamily: { sans: ["var(--font-manrope)", "sans-serif"], display: ["var(--font-display)", "sans-serif"] }
    }
  },
  plugins: []
} satisfies Config;

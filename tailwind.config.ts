import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens pulled directly from the Figma file
        bg: "#0c0d10",
        surface: "#15171d",
        "surface-alt": "#1f232b",
        border: {
          DEFAULT: "#222630",
          soft: "#20242e",
          header: "#1c1f26",
          footer: "#1a1d24",
        },
        accent: "#c2f800",
        "accent-soft": "#1a2312",
        muted: "#9ca3af",
        subtle: "#6b7280",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

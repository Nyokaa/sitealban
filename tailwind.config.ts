import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette inspirée du modèle de référence (étude notariale) :
        // bleu nuit institutionnel, or chaud, fond crème.
        navy: {
          DEFAULT: "#1B2A4A",
          50: "#f3f5f9",
          100: "#e1e6ef",
          800: "#22325a",
          900: "#1B2A4A",
          950: "#111c33",
        },
        gold: {
          DEFAULT: "#B89B5E",
          light: "#cbb27c",
          dark: "#9a8049",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F1EBE1",
        },
        ink: "#2A2A2A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;

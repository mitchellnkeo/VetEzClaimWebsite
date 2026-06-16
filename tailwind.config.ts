import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#006092",
          dark: "#005985",
          light: "#0a7ab8",
        },
        accent: {
          DEFAULT: "#e29f0a",
          dark: "#c78a08",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

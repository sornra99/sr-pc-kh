import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ef1b2d",
          dark: "#060607",
          panel: "#111114",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(239, 27, 45, 0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(239, 27, 45, 0.25)" },
          "50%": { boxShadow: "0 0 55px rgba(239, 27, 45, 0.55)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

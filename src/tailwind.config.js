/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🌙 Enable dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glowPulse: "glowPulse 4s ease-in-out infinite",
        textGlow: "textGlow 4s ease-in-out infinite alternate",
        shine: "shine 5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blob: "blob 8s ease-in-out infinite",
        starPulse: "starPulse 3s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%": { boxShadow: "0 0 10px #9333ea" },
          "50%": { boxShadow: "0 0 25px #ec4899" },
          "100%": { boxShadow: "0 0 10px #9333ea" },
        },
        textGlow: {
          "0%": { textShadow: "0 0 10px #f472b6" },
          "100%": { textShadow: "0 0 25px #e879f9" },
        },
        shine: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "33%": { transform: "scale(1.1) translate(10px, -10px)" },
          "66%": { transform: "scale(0.9) translate(-10px, 10px)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        starPulse: {
          "0%": { opacity: 0.2 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 20% 20%, #3b82f6, #1e3a8a)",
        "magic-glow": "radial-gradient(circle at top left, #9333ea, #111827)",
      },
    },
  },
  plugins: [],
};

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
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease-out",
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "cosmic-pulse": "cosmic-pulse 3s ease-in-out infinite",
        aurora: "aurora 8s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "cosmic-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
            transform: "scale(1.05)",
          },
        },
        aurora: {
          "0%, 100%": {
            background:
              "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)",
            transform: "rotate(0deg) scale(1)",
          },
          "33%": {
            background:
              "linear-gradient(90deg, #ec4899, #06b6d4, #8b5cf6)",
            transform: "rotate(120deg) scale(1.1)",
          },
          "66%": {
            background:
              "linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)",
            transform: "rotate(240deg) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [],
};

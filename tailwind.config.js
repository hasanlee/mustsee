/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      slideInTop: {
        "0%": {  transform: "translateY(-1000px)", opacity:0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      slideOutTop: {
        "0%": { transform: "translateY(0)", opacity: 1 },
        "100%": { transform: "translateY(-1000px)", opacity: 0 },
      },
    },
    animation: {
      slideInTop: "slideInTop 0.9s ease-in-out both",
      slideOutTop: "slideOutTop 0.9s ease-in-out both",
    },
  },
  plugins: [],
};

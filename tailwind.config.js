/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Sora", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f2f8ff",
          100: "#dcebff",
          200: "#b8d8ff",
          300: "#84bcff",
          400: "#4c98ff",
          500: "#2a7fff",
          600: "#1c67f0",
          700: "#1953da",
          800: "#1b45b0",
          900: "#1c3d8a"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 64, 104, 0.12)"
      }
    }
  },
  plugins: []
};

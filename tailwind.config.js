/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    fontFamily: {
      sans: ["Pretendard", "sans-serif"]
    },
    extend: {
      colors: {
        "main-primary": "#7FB185",
        "main-secondary": "#D4E3A7",
        "main-tertiary": "#609A79",
        "point-high": "#E53F65",
        "point-mid": "#FFC6D3",
        "point-low": "#FFECF1",
        "background-main": "#FFFCF7",
        "background-section": "#FCF9EC",
        "background-deep": "#F1F1F1",
        "font-head": "#151515",
        "font-body": "#434343",
        "font-info": "#929292",
        "font-disable": "#C4C4C4"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

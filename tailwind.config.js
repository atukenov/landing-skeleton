/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette taken from the Caspi Polymer commercial offer
        amber: {
          DEFAULT: "#f2a33a", // fills, accents on dark
          hover: "#e0901f",
          ink: "#a15c00", // accent text on light backgrounds (AA contrast)
        },
        ink: {
          DEFAULT: "#16181b",
          800: "#22252a",
          700: "#2c3036",
          600: "#3a3e45",
        },
        sand: {
          DEFAULT: "#f4f2ee", // card background
          hover: "#ece8e1",
          line: "#e3e1dc",
          border: "#dcd9d2",
        },
        muted: {
          DEFAULT: "#4a4f57", // body copy
          soft: "#5b6068", // captions
          dark: "#c9ccd1", // body copy on ink
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const forms = require("@tailwindcss/forms");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      neutral: {
        90: "#211814",
        60: "#666666",
        25: "#BFBFBF",
      },
      warning: "#FFD970",
      success: "#51D899",
      error: "#DE330D",
      info: "#6989FA",
      black: "#211814",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
  },
  plugins: [forms],
};

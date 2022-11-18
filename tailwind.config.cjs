/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'neutral-90': "#211814",
      'neutral-60': "#666666",
      'neutral-25': "#BFBFBF",
      "warning": "#FFD970",
      "success": "#51D899",
      "error": "#DE330D",
      "info": "#6989FA",
      "black": "#211814",
      "white": "#FFFFFF",
    },
    fontFamily: {
      sans: ["Roboto"]
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

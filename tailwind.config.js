const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        froggy: {
          "100": "#E3FFDE",
          "200": "#CDF7C2",
          "300": "#98EA7C",
          "400": "#6CE438",
          "500": "#56C618",
          "600": "#4AAA09",
          "700": "#326408",
          "800": "#1A3C07",
          "900": "#0D2005",
          "black": "#061104",
        }
      }
    },
  },
  plugins: [],
}

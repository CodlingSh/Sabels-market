/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}", "./static/js/*.js", "../../layouts/**/*.{html,js}"],
  theme: {
    screens: {
      "xs": "360px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}


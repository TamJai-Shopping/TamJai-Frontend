const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        tamjai: {
          "100": "#d8f8ca",
          "200": "#B0C03B",
          "300": "#528D58"
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

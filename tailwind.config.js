const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        "theme1": "#0A6847",
        "theme2": "#2C7865",
        "theme3": "#114232",
        "theme-light": "#40A578",
        "theme-light2": "#74E291",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}


/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-v1': '#9cc634',
        'green-v2': '#A6C34F',
        'primary-v1': '#072446',
        'primary-2': '#0D2444'
      },
      fontFamily: {
        sans: ['Roboto'],
      },
    },
  },
  plugins: [],
}


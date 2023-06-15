/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': '#A6C34F',
        'light-green': '#9cc634',
        'disabled-green': '#BFD093',
        'primary': '#0D2444',
        'light-primary': '#072446',
        'border': '#CCCCCC',
      },
      fontFamily: {
        sans: ['Roboto'],
      },
    },
  },
  plugins: [],
}


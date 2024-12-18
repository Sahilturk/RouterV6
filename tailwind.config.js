/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6948ff',
        secondary: '#553bcb',
        darkgrey: '#22262a',
        lightgrey: '#d3d3d3',
        grey: '#808080',
      },
      screens: {
        'max-lg': { 'max': '906px' },
        'max-xl': { 'max': '1280px' },
        'max-custom': { 'max': '900px' },
    },
    },
  },
  plugins: [],
}


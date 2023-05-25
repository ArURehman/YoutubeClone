/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      spacing:{
        '33': '8.25rem',
        '34': '8.50rem',
        '35': '8.75rem'
      },
      colors: {
        'almostBlack': '#0f0f0f',
        'almostGray': '#282828'
      }
    },
  },
  plugins: [],
}
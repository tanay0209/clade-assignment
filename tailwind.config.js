/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC4A2D",
        primaryGray: '#B0B0B0',
        secondaryGray: "#E7E7E7"
      },
      fontFamily: {
        sans: ['General Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


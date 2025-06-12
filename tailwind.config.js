/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': "#932F6D",
        'secondary-color': '#420039'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d6da7",
        filterBg: "#7fa8f6",
        fontColor: "#FFFFFF",
      },
      fontFamily: {
        body: ['Lato']
      }
    },
  },
  plugins: [],
}

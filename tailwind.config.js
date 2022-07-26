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
        filterBgEven: "#2d5092",
        titleBar: "#234687",
        fontColor: "#FFFFFF",
      },
      fontFamily: {
        body: ['Lato'],
        title: ['sans']
      }
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2876F8",
        },
        dark: {
          DEFAULT: "#212121"
        },
        gray: {
          ...colors.gray,
          100: {
            DEFAULT: '#f3f4f5',
            dark: '#212121'
          },
          500: {
            DEFAULT: '#757685',
            dark: '#8A8A8A'
          },
          700: {
            DEFAULT: '#151515',
            dark: '#FFFFFF'
          }
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")()
  ],
};

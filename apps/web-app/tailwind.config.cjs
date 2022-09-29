const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2876F8',
        },
        dark: {
          DEFAULT: '#212121',
        },
        gray: {
          ...colors.gray,
          50: '#F8F9FD',
          '50-dark': '#2C2C2C',
          100: '#f3f4f5',
          '100-dark': '#212121',
          200: '#E8E8EB',
          '200-dark': '#383838',
          400: '#A3A4AE',
          '400-dark': '#737373',
          500: '#757685',
          '500-dark': '#8A8A8A',
          700: '#151515',
          '700-dark': '#FFFFFF',
        },
        red: {
          ...colors.red,
          100: '#FA61531A',
          500: '#FA6153',
        },
      },
    },
  },
  plugins: [require('tailwindcss-radix')()],
};

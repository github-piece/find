/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2876F8',
        gray: {
          '200-dark': '#383838',
          600: '#47495D',
          '600-dark': '#ADADAD',
          700: '#151515',
          '700-dark': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};

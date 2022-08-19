/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#2876F8",
      },
      dark: {
        DEFAULT: "#212121"
      }
    }
  },
  plugins: [
    require("tailwindcss-radix")()
  ],
};

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

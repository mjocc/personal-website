module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#1c1c1c',
          light: '#292929',
          lightest: '#363636',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

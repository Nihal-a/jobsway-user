module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#008FAE',
      'secondary': '#8B8B8B',
    },
    backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#008FAE',
        'secondary': '#F6F6F6',

    }),
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  }
}
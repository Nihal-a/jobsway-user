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
      'secondary': '#F6F6F6',
      'white': '#fff'
    },
    backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#008FAE',
        'secondary': '#F6F6F6',
        'black': '#2c2c2c',
        'dark': '#c6c6c6',
      'white': '#fff'

    }),
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  }
}
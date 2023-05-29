/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'vsm': '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};

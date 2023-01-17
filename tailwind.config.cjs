/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  important: '.jmui',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        acent: 'var(--color-acent)',
        grey_light: 'var(--color-grey-light)',
        grey_dark: 'var(--color-grey-dark)'
      },
      fontFamily: {
        logo: ['Anton', 'sans-serif']
      }
    }
  },
  plugins: []
};

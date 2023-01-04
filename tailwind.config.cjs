/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      }
    }
  },
  plugins: []
};

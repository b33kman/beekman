/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        olive: { DEFAULT: '#7C8433', dark: '#6A7129', light: '#939B4A' },
        'purple-darkest': '#2E1537',
        'blue-light': '#B4DCF3',
        'blue-lighter': '#E3F1FB',
        'purple-dark': '#3A244C',
        'purple-medium': '#5A3876',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

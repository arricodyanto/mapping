/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '22px',
    },
    extend: {
      colors: {
        primary: '#f1CA11',
        secondary: '#F47F20',
        primShadow: '#D4B20E',
        secShadow: '#D7701D',
      },
      fontFamily: {
        IBM: ['IBM Plex Sans']
      }
    },
  },
  plugins: [],
}

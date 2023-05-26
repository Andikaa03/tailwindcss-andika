/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#4f46e5',
        dark: '#0f172a',
        second: '#64748b',
      },
      screens: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}


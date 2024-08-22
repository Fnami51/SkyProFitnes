/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'desktop':'1160px',
      'mobil':'343px'
    },
    colors: {
      'green':'#BCEC30',
      'green-light':'#C6FF00',
      'gray':'#999999',
      'gray-light':'#E9ECED',
      'gray-super-light':'#F7F7F7',
      'gray-dark':'',
      'white':'#FFFFFF',
      'black':'#000000'
    },
    extend: {
      borderRadius: {
        'btnRad':'46px'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '18px': '18px',
      },
    },
  },
  plugins: [],
}
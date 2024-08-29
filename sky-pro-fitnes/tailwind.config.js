/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  screens: {
		'mobile': '343px',
		'tablet': '768px',
		'desktop': '1160px',
	  },
	  extend: {
		colors: {
		  'green': '#BCEC30',
		  'green-light': '#C6FF00',
		  'gray': '#999999',
		  'gray-light': '#E9ECED',
		  'gray-super-light': '#F7F7F7',
		  'white': '#FFFFFF',
		  'black': '#000000',
		  'primary': '#BCEC30',
		  'primary-hover': '#C6FF00',
		  'secondary': '#F7F7F7',
		  'secondary-active': '#E9ECED',
		  'error': '#DB0030',
		},
		borderRadius: {
		  'btnRad': '46px',
		  'modal': '30px',
		},
		fontFamily: {
		  roboto: ['Roboto', 'sans-serif'],
		  'stratos-skyeng': ['StratosSkyeng', 'sans-serif'],
		},
		fontSize: {
		  '18px': '18px',
		},
		spacing: {
		  '18': '4.5rem',
		},
		boxShadow: {
		  'modal': '0px 4px 67px -12px rgba(0, 0, 0, 0.13)',
		},
	  },
	},
	plugins: [],
  }
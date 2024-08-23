/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			mobile: { max: '425px' },
			tablet: '1024px',
			desktop: '1160px',
			mediumDesktop: '1300px',
		},
		colors: {
			green: '#BCEC30',
			'green-light': '#C6FF00',
			gray: '#999999',
			'gray-light': '#E9ECED',
			'gray-super-light': '#F7F7F7',
			white: '#FFFFFF',
			black: '#000000',
			background: '#FAFAFA',
		},
		extend: {
			borderRadius: {
				btnRad: '46px',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			fontSize: {
				'18px': '18px',
			},
			minHeight: {
				screen: '100vh',
			},
		},
	},
	plugins: [],
}
/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			backgroundColor: {
				background: 'linear-gradient(180deg, #FFAAF8 0%, #FFF6AE 100%)'
			},
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)'
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif']
			}
		}
	}
}

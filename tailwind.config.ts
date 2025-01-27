import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					'50': '#ecfdf4',
					'100': '#d1fae2',
					'200': '#a7f3cb',
					'300': '#6de8ae',
					'400': '#42d796',
					'500': '#0fba75',
					'600': '#04975e',
					'700': '#03794f',
					'800': '#065f40',
					'900': '#064e36',
					'950': '#022c1f',
				},
				secondary: {
					'50': '#fdfce9',
					'100': '#fcfbc5',
					'200': '#faf48e',
					'300': '#f6e74e',
					'400': '#f2d726',
					'500': '#e2bd10',
					'600': '#c3940b',
					'700': '#9b6b0d',
					'800': '#815512',
					'900': '#6d4516',
					'950': '#402408',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;

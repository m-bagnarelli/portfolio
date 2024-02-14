/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ['Inder', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				'lime': 'oklch(62.91% 0.1914 270)'
			}
		},
	},
	plugins: [],
}

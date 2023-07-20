/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quattrocento sans'],
				serif: ['Taviraj'],
				h1: ['Bodoni Moda'],
			}
		},
	},
	plugins: [],
}

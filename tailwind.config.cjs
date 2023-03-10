/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"soft-blue" : "hsl(231, 69%, 60%)",
				"soft-red" : "hsl(0, 94%, 66%)",
				"grayish-blue" : "hsl(229, 8%, 60%)",
				"very-dark-blue" : "hsl(229, 31%, 21%)"
			},
			fontFamily: {
				"rubik": "'Rubik', sans-serif"
			}
		},
	},
	plugins: [],
}

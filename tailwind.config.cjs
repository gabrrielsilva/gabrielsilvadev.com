module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: '#d8ed5b',
				secondaryBrand: '#edeef0'
			},
			fontFamily: {
				matterRegular: ['Matter Regular'],
				matterSemiBold: ['Matter SemiBold'],
				matterHeavy: ['Matter Heavy']
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};

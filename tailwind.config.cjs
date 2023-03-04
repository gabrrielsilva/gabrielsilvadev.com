module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: '#06f784',
				secondaryBrand: '#fcfbf8'
			},
			fontFamily: {
				matterRegular: ['Matter Regular'],
				matterSemiBold: ['Matter SemiBold'],
				matterHeavy: ['Matter Heavy'],
				helveticaNowText: ['Helvetica Now Text']
			},
			animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
		},
	},
	plugins: [require('tailwind-scrollbar')],
};

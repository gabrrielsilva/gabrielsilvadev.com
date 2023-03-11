module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: '#55f5a3',
				secondaryBrand: '#fcfbf8',
				tertiaryBrand: '#fff059'
			},
			fontFamily: {
				matterRegular: ['Matter Regular'],
				matterSemiBold: ['Matter SemiBold'],
				matterHeavy: ['Matter Heavy'],
				helveticaNowText: ['Helvetica Now Text Regular'],
				helveticaNowTextMedium: ['Helvetica Now Text Medium'],
				helveticaNowTextLight: ['Helvetica Now Text Light'],
			},
			animation: {
        'spin-slow': 'spin 3s linear infinite',
				'scroll': 'scroll 30s linear infinite',
				'bounce-slow': 'bounce 3s infinite',
				'gradient-bg': 'gradient 3s ease infinite'
      },
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-250px * 7))' }
				},
				bounce: {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				gradient: {
					'0%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					},
					'100%': {
						'background-position': '0% 50%'
					}
				}
			}
		},
	},
	plugins: [require('tailwind-scrollbar')],
};

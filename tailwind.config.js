const colors = require('tailwindcss/colors');

module.exports = {
	purge: [ './src/**/*.{js, jsx, ts, tsx}', './public/index.html' ],
	darkMode: 'media',
	content: [],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				red: colors.rose
			}
		}
	},
	plugins: []
};

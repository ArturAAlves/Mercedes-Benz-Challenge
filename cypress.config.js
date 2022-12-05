const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
	e2e: {
		viewportWidth: 1280,
		viewportHeight: 780,
		baseUrl: 'https://www.mercedes-benz.co.uk',
		chromeWebSecurity: false,
		includeShadowDom: true,
		setupNodeEvents(on, config) {
			allureWriter(on, config)
			return config
		},
	},
})

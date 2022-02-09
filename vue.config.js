const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: bootstrapSassAbstractsImports.join('\n')
			},
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		}
	},
	// devServer: {
	// 	compress: true,
	// 	inline: true,
	// 	port: '8080',
	// 	allowedHosts: [
	// 		'*',
	// 		'vue-frontend-rhc-dmji6.ondigitalocean.app',
	// 		'www.realhomecompare.com'
	// 	]
	//   },
}
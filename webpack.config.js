var webpack = require('webpack');
module.exports = {
	context: __dirname,
	entry : {
		app : './src/app.js',
		vendor :['angular']
	},
	output : {
		path : __dirname +'/bin',
		filename : 'app.bundle.js'
	},
	plugins: [
new webpack.optimize.CommonsChunkPlugin({/* chunkName= */name : "vendor", /* filename= */filename :"vendor.bundle.js"})
]
}
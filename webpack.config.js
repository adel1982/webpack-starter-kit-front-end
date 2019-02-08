const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, '/build/'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}
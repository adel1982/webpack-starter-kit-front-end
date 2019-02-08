const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: './src/public/index.html'
});

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
	},
	plugins: [
		htmlWebpackPlugin
	]
}
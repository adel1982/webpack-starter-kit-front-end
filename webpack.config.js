
const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template:'./src/index.html'
})

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, '/build/'), 
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_module/,
				use: {loader: 'babel-loader'}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64]',
							//minimize: true
						}
					}, 
					{
            loader: 'sass-loader',
            options: {
            	sourceMap: true,
						}
					}
				]
			}
		]
	},
	plugins: [
		htmlWebpackPlugin,
		new MiniCssExtractPlugin()
	]
}
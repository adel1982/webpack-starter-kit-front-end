
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template:'./src/index.html'
})

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.join(__dirname, '/build/'), 
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64]',
							minimize: true
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
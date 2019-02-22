const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin 	 = require('copy-webpack-plugin');
const Jarvis               = require("webpack-jarvis");

const build = '/build/';

const paths = {
	src  : path.join(__dirname, './src'),
	build: path.join(__dirname, './build')
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: `${paths.src}/index.html`
})

let webpackPort = 8900
let jarvisPort  = 5000

module.exports = {
	devServer: {
    contentBase: path.join(__dirname, build),
    compress: true,
    port: webpackPort,
  },
	entry: `${paths.src}/js/index.js`,
	output: {
		path: path.join(__dirname, build),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
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
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: __dirname + '/postcss.config.js'
							},
							sourceMap: true
						},
					}, 
					{
            loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		htmlWebpackPlugin,
		new MiniCssExtractPlugin(),
		new Jarvis({
			port: jarvisPort 
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(`${paths.src}/favicon.ico`),
				to  : path.join(`${paths.build}/favicon.ico`)
			}
		]),
	]
}
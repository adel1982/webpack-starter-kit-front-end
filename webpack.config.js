const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Jarvis               = require("webpack-jarvis");

let webpackPort = 3000
let jarvisPort  = 5000

module.exports = {
	mode: 'development',
	
	entry: './src/index.js',
	
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js'
	},
	
  module: {
    rules: [
			{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './src/assets/fonts',
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
      ]
      },
		],
	},
	
	devServer: {
    port       : webpackPort,
    contentBase: path.resolve(__dirname, 'src'),
	},

  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new Jarvis({
      port: jarvisPort
    })
  ]
}
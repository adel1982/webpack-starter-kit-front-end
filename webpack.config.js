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
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/images',
          publicPath: 'images'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts',
          publicPath: 'fonts'
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
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
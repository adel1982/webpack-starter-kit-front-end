const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const Jarvis               = require("webpack-jarvis");

let webpackPort = 3000
let jarvisPort  = 5000

module.exports = {
	mode: 'development',
	
	entry: path.resolve(__dirname, 'src', 'index.js'),
	
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
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
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new Jarvis({
      port: jarvisPort
    }),
    new CopyWebpackPlugin([{
      from: path.resolve('src/img/favicon.ico'),
      to  : path.resolve('dist/img/favicon.ico')
    }]),
  ]
}
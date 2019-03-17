const path              = require('path');
const common            = require('./webpack.common');
const merge             = require('webpack-merge');
const Jarvis            = require("webpack-jarvis");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackPort = 3000
let jarvisPort  = 5000

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.scss$/,
      use: [{
          loader: 'style-loader' // 3 - Inject styles into DOM
        },
        {
          loader: 'css-loader', // 2 - CSS into common JS
          options: {
            modules: true,
            localIdentName: '[name]_[local]'
          }
        },
        {
          loader: 'sass-loader' // 1 - SASS into CSS
        }
      ]
    }]
  },
  devServer: {
    port: webpackPort,
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new Jarvis({
      port: jarvisPort
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
});

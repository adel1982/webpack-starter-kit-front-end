const path                    = require('path');
const common                  = require('./webpack.common');
const merge                   = require('webpack-merge');
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin            = require('terser-webpack-plugin');
const HtmlWebpackPlugin       = require('html-webpack-plugin');

module.exports = merge(common, {
  mode  : 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path    : path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.scss$/,
      use: [
        MiniCssExtractPlugin.loader, // 3 - Extract CSS into file
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
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css'}),
    new CleanWebpackPlugin()
  ]
});

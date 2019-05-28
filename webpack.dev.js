const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let webpackPort = 3000;

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3 - Adds CSS to the DOM by injecting a <style> tag
          "css-loader", // 2 - Interprets @import and url() like import/require() and will resolve them.
          "postcss-loader",
          "sass-loader" // 1 - Loads a Sass/SCSS file and compiles it to CSS.
        ]
      }
    ]
  },
  devServer: {
    port: webpackPort,
    contentBase: path.resolve(__dirname, "src")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
});

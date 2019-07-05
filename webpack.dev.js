const path = require("path");

const common = require("./webpack.common");
const merge = require("webpack-merge");

const Jarvis = require("webpack-jarvis");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const webpackPort = 3000;
const jarvisPort  = 5000;

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
          {
            loader: "style-loader" // 3 - Extract CSS into files
          },
          {
            loader: "css-loader", // 2 - Interprets @import and url() like import/require() and will resolve them.
            options: {
              modules: true,
              localIdentName: "[name]_[local]"
            }
          },
          {
            loader: "postcss-loader" 
          },
          {
            loader: "sass-loader" // 1 - Loads a Sass/SCSS file and compiles it to CSS.
          }
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
    }),
    new Jarvis({
      port: jarvisPort
    }),
  ]
});

const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin    = require('copy-webpack-plugin');
const Jarvis               = require("webpack-jarvis");

let webpackPort = 3000
let jarvisPort  = 5000

module.exports = {
<<<<<<< HEAD
	mode: 'development',
	
	entry: path.resolve(__dirname, 'src', 'index.js'),
	
=======
  devServer: {
    contentBase: path.join(__dirname, build),
    compress   : true,
    port       : webpackPort,
  },
  entry: `${paths.src}/js/index.js`,
>>>>>>> 8d5b27646d619577faf517e0b04417c9292439ad
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
	},
	
  module: {
    rules: [
			{
<<<<<<< HEAD
=======
			  test: /\.html$/,
			  use: {
			    loader: 'html-loader',
			    options: {
			      minimize: true,
        		removeComments: false,
        		collapseWhitespace: false
			    }
			  }
			},
			{
>>>>>>> 8d5b27646d619577faf517e0b04417c9292439ad
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
<<<<<<< HEAD
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

=======
        test: /.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[name]_[local]_[hash:base64]',
            }
          },
          {
						loader: 'sass-loader',
						options: {
							sourceMap: true 
						}
          }
        ],
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
>>>>>>> 8d5b27646d619577faf517e0b04417c9292439ad
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new Jarvis({
      port: jarvisPort
    }),
    // new CopyWebpackPlugin([{
    //   from: path.resolve('src/img/favicon.ico'),
    //   to  : path.resolve('build/img/favicon.ico')
    // }]),
  ]
}
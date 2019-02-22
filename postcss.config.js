module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'autoprefixer': env === 'production' ? options.autoprefixer : false,
		'cssnano': env === 'production' ? options.cssnano : false
  },
};
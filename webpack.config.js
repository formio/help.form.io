const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './assets/index.js',
  output: {
    filename: 'index.min.js',
    path: __dirname + '/assets'
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};

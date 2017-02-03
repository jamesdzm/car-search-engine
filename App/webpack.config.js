var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    hot: true
  },
};

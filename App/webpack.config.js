var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch', './src/main.js'],
  output: {
    path: path.resolve('./'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    contentBase: "src",
    headers: { "Access-Control-Allow-Origin": "*" },
  },
};

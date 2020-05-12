const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
      path: __dirname + '/build',
      filename: 'index.js',
      library: 'index.js',
      libraryTarget: 'umd',
      umdNamedDefine: true,
  },
  node: {
    child_process: 'empty',
    fs: 'empty',
    crypto: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    rules: [      
      {
        test: /\.jsx?$/,
        loader: 'remove-flow-types-loader',
      }
    ]
  }
}
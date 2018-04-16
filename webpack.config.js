const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const URL_LOADER_SIZE_LIMIT = 1048576 - 1;

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: URL_LOADER_SIZE_LIMIT
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'js/index.html')
    }),
    new ExtractTextPlugin({
      filename: '[name][hash].css'
    })
  ]
};
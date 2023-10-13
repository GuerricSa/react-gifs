const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html',
    }),
  ],
  devtool: 'eval-cheap-module-source-map', // Updated devtool configuration
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Replaced 'loader' with 'use'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Replaced 'loaders' with 'use'
      },
      {
        test: /\.html$/,
        use: 'html-loader', // Replaced 'loader' with 'use'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

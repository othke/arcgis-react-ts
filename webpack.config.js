const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ArcGISWebpackPlugin = require('@arcgis/webpack-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new ArcGISWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src/index.html'), chunksSortMode: 'none' }),
  ],
  node: {
    process: false,
    global: false,
    fs: 'empty',
  },
};

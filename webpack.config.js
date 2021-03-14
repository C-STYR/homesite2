const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/',
    proxy: {
      "/api/**": "http://localhost:3000",
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,

        // use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader']
        // },

        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  mode: 'development',
  plugins: [

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
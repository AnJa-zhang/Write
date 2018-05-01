const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    core: ["react", "redux", "react-router"],
    main: './src/index.js'
  },
  devServer: {
   contentBase: './dist',
   port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.less$/,
          use: ['style-loader','css-loader',"less-loader"]
        },
      ]
    }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'mrroin.js',
    library: {
        name: 'mrroin',
        type: 'umd',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: "./public/index.html"
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  }
};
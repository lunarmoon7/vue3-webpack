const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // createWebHistory() 사용 시 필요
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({ template: './index.html' }),
    new CopyPlugin({ patterns: [{ from: 'static', to: 'dist' }] }),
  ],
  devServer: {
    port: 7777,
    historyApiFallback: true, // createWebHistory() 사용 시 필요, URL에 해당하는 페이지가 없을 경우 index.html로 리다이렉트 시켜줌
  },
};

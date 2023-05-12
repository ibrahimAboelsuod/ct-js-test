const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['car'];

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    ...pages.reduce((config, page) => {
      const newConfig = {
        ...config,
      };
      newConfig[page] = `./src/pages/${page}/${page}.page.js`;
      return newConfig;
    }, {}),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['index'],
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}/index.html`,
          filename: `${page}/index.html`,
          chunks: [page],
        }),
    ),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(json)$/,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
};

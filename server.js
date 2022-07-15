/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const ruleForImages = {
  test: /\.(png|svg|jpe?g)$/,
  type: 'asset/resource',
};

const ruleForFonts = {
  test: /\.(woff2?|ttf|eot)(\?v=\w+)?$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[hash][ext]',
  },
};

const ruleForCss = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
};

const ruleForTypeScript = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  },
};

const rules = [ruleForTypeScript, ruleForCss, ruleForImages, ruleForFonts];

const alias = {
  Images: path.resolve(__dirname, 'src/images'),
  Styles: path.resolve(__dirname, 'src/styles'),
};

const webpackConfig = {
  // devtool: 'source-map',
  mode: 'development',
  performance: { hints: false },
  entry: './src/App.tsx',
  resolve: {
    alias: alias,
    extensions: ['.ts', '.tsx', '.js', '.png'],
  },
  module: {
    rules,
  },
  output: {
    filename: false ? 'js/[name].[contenthash].js' : 'js/main.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      template: path.join('src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: !false
        ? 'assets/css/[name].css'
        : 'assets/css/[name].[contenthash].css',
    }),
  ],
};

const devServerConfig = {
  port: 3333,
  open: true,
  static: './build',
  compress: true,
  hot: true,
  historyApiFallback: true,
  client: {
    overlay: {
      errors: true,
      warnings: true,
    },
  },
};

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(devServerConfig, compiler);

const runServer = async () => {
  await server.start();
};

runServer();

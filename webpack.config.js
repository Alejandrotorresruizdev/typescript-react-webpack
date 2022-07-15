/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    // devtool: 'source-map',
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
      filename: isProduction ? 'js/[name].[contenthash].js' : 'js/main.js',
      path: path.resolve(__dirname, 'build'),
      assetModuleFilename: 'assets/images/[hash][ext][query]',
    },
    optimization: {
      minimize: true,
    },
    devServer: {
      port: 3333,
      open: true,
      static: './build',
      compress: true,
      hot: true,
      historyApiFallback: true,
      client: {
        progress: true,
        logging: 'info',
        overlay: {
          errors: true,
          warnings: true,
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        showErrors: true,
        template: path.join('src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: !isProduction
          ? 'assets/css/[name].css'
          : 'assets/css/[name].[contenthash].css',
      }),
    ],
  };
};

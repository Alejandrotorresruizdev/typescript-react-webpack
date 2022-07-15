// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForCss = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
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

const rules = [ruleForTypeScript, ruleForCss];

module.exports = (env, argv) => {
  const { mode } = argv;
  console.log(argv)
  const isProduction = mode === 'production';

  return {
    //devtool:'source-map',
    entry: './src/App.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules,
    },
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    optimization: {
      minimize: true
    },
    devServer: {
      port: 3333,
      open: true,
      static: './build',
      compress: true,
      historyApiFallback: true,
      client: {
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
    ],
  };
};

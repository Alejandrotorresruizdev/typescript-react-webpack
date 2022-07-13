/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const ruleForCss = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const ruleForTypeScript = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      "presets": [
        [
          "@babel/preset-react",
          {
            "runtime": "automatic" 
          }
        ]
      ]
    } 
}

const rules = [ruleForTypeScript,ruleForCss];

module.exports = (env,argv) => {  
  const {mode} = argv;
  const isProduction = mode === 'production';

  return {
    //devtool:'source-map',
    entry: "./src/App.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules
    },
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, "build"),
    },
    devServer: {
      port: 3333,
      hot: true,
      open: true,
      static: './build',
      compress: true,
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
    },
    plugins: [
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        showErrors: true,
        template: path.join("src/index.html"),
      }),
    ],
  }
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "main.js"),
  stats: {
    children: false,
    modules: false,
    assets: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
          { loader: "sass-loader", options: { implementation: require("sass") } },
          { loader: "resolve-url-loader" },
        ],
      },
    ],
  },
};

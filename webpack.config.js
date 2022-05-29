const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devServer = isDev =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
        },
      };

module.exports = ({ develop }) => ({
  mode: develop ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about-us.html",
      template: "./src/about-us.html",
    }),
    new HtmlWebpackPlugin({
      filename: "service-app.html",
      template: "./src/service-app.html",
    }),
    new HtmlWebpackPlugin({
      filename: "service-funding.html",
      template: "./src/service-funding.html",
    }),
    new HtmlWebpackPlugin({
      filename: "service-advisory.html",
      template: "./src/service-advisory.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  ...devServer(develop),
});

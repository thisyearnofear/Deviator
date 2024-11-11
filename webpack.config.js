const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./game.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(mp3|wav)$/i,
        type: "asset/resource",
        generator: {
          filename: "audio/[name][ext]",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(obj|mtl|gltf|glb)$/i,
        type: "asset/resource",
        generator: {
          filename: "models/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "",
          noErrorOnMissing: true,
        },
        {
          from: "audio",
          to: "audio",
          noErrorOnMissing: true,
        },
        {
          from: "models",
          to: "models",
          noErrorOnMissing: true,
        },
        {
          from: "*.css",
          to: "[name][ext]",
        },
        {
          from: "*.png",
          to: "[name][ext]",
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components/"),
      utils: path.resolve(__dirname, "src/utils/"),
      managers: path.resolve(__dirname, "src/managers/"),
    },
  },
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
};

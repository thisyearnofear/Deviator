const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./game.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
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
        test: /\.(mp3|wav)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/audio/[name][ext]",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components/"),
      utils: path.resolve(__dirname, "src/utils/"),
      managers: path.resolve(__dirname, "src/managers/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: false, // Don't auto-inject scripts
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
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
        {
          from: "audio",
          to: "assets/audio",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendors",
    },
    runtimeChunk: "single",
  },
  performance: {
    hints: false,
  },
  externals: {
    three: "THREE",
    gsap: "gsap",
    ethers: "ethers",
  },
};

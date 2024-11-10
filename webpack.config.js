const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./game.js",
  output: {
    filename: "[name].[contenthash].js",
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
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(mp3|wav)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/sounds/[hash][ext][query]",
        },
      },
      {
        test: /\.(glb|gltf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/models/[hash][ext][query]",
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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          noErrorOnMissing: true,
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
        {
          from: "models",
          to: "assets/models",
          noErrorOnMissing: true,
        },
        {
          from: "sounds",
          to: "assets/sounds",
          noErrorOnMissing: true,
        },
        {
          from: "textures",
          to: "assets/textures",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  externals: {
    three: "THREE",
    gsap: "gsap",
    web3: "Web3",
    ethers: "ethers",
  },
  devtool: "source-map",
};

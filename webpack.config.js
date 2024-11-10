const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production", // Set mode to production
  entry: "./game.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/", // Ensure this matches your deployment structure
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Ensure compatibility with older browsers
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Automatically resolve these extensions
    alias: {
      "@": path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components/"),
      utils: path.resolve(__dirname, "src/utils/"),
      managers: path.resolve(__dirname, "src/managers/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: "./index.html", // Use your index.html as a template
      filename: "index.html", // Output file name
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  optimization: {
    minimize: true, // Enable minimization
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        web3: {
          test: /[\\/]node_modules[\\/]web3[\\/]/,
          name: "web3",
          chunks: "all",
          priority: 10,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devtool: "source-map", // Add this for production debugging
  externals: {
    three: "THREE",
    gsap: "gsap",
    web3: "Web3",
  },
};

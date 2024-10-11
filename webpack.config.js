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
      components: path.resolve(__dirname, "components/"), // Alias for components folder
      utils: path.resolve(__dirname, "utils/"), // Alias for utils folder
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
      chunks: "all", // Split vendor and application code
    },
  },
};

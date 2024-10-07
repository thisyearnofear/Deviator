const path = require("path");

module.exports = {
  mode: "development",
  entry: "./game.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
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
  devServer: {
    static: "./", // Serve the root directory (where index.html is located)
    port: 8080,
  },
};

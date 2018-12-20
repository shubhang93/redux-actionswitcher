const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: { path: path.resolve(__dirname, "lib"), filename: "index.js" },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
  plugins:[new ]
};

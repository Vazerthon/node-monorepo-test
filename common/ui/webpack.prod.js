const path = require("path");

module.exports = {
  entry: {
    index: { import: "./src/index.js" },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    filename: "ui.bundle.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "caresourcer-ui",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  target: "node",
  externals: {
    react: "react",
    "react/jsx-runtime": "react/jsx-runtime",
    "react-dom": "react-dom",
    "@emotion/styled": "@emotion/styled",
    "prop-types": "prop-types",
  },
};

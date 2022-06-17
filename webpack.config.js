const path = require("path");

module.exports = {
  entry: {
    index: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.js"],
    edit: ["core-js/stable", "regenerator-runtime/runtime", "./src/edit.js"],
  },
  output: {
    path: path.resolve(__dirname, "./public/scripts"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      /* {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader"],
      }, */
    ],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};

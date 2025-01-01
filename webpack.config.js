const path = require("path");

module.exports = {
  entry: "./src/components/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts or .tsx files
        use: "ts-loader", // Use ts-loader to process these files
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these extensions
  },
};

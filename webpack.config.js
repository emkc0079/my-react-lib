const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Update this to your actual entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // This matches both .ts and .tsx files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Add file extensions to resolve
  },
  mode: "development", // or 'production'
};

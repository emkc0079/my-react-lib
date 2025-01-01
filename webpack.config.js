const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: "source-map-loader", // Add this if you're using source maps
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Other configurations...
};

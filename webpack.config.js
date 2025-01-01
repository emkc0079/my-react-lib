const path = require("path");

module.exports = {
  entry: "./src/index.js", // Adjust to your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // TypeScript files
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // SCSS files
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // LESS files
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // Text files
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      // Image files
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: "file-loader",
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
      // URL loader for small files
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Add extensions to resolve
  },
  mode: "development", // Change to 'production' for production builds
};

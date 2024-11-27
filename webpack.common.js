// import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

// Get the directory name from the current module's URL
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default {
  entry: "./src/main.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.bundle.js",
    // path: resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
    ],
  },
};

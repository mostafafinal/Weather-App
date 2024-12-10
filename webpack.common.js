import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CompressionPlugin from "compression-webpack-plugin";

export default {
  entry: "./src/main.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.bundle.js",
    clean: true,
  },
  plugins: [
    new CompressionPlugin({
      deleteOriginalAssets: false,
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg|WebP)$/,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      scriptLoading: "defer",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
    new DotenvWebpackPlugin({
      systemvars: true,
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
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};

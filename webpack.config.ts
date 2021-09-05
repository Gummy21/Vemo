import path from "path";
import webpack from "webpack";
import Dotenv from "dotenv-webpack"
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname,  "dist/Volme"),
    publicPath: '/',
    filename: "[name].js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json",".scss"]
  },

  module: {
    rules: [
     
      { test: /\.tsx?$/,include: path.resolve(__dirname, 'src'),  use: ["ts-loader"]  },
      { test:/\.scss$/, include: path.resolve(__dirname, 'src/components'), use: ["style-loader","css-loader", "sass-loader"]  },
      { test: /\.png?$/,  include: path.resolve(__dirname, 'src/assets'),  type:"asset/resource"  }
    ]
  },
  plugins: [htmlPlugin,new Dotenv()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

export default config;
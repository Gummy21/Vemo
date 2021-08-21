import path from "path";
import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname,  "/dist"),
    filename: "bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json",".scss"]
  },

  module: {
    rules: [
     
      { test: /\.tsx?$/,  use: ["ts-loader"]  },
      { test:/\.scss$/,  use: ["style-loader","css-loader", "sass-loader"]  },
      { test: /\.png?$/,  type:"asset/resource"  }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;
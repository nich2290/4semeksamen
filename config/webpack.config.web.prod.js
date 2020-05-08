const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.web.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const pjson = require("../package.json");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../" + pjson.webfolder),
    filename: "./assets/js/[name].js"
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6
      }
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});

const webpack = require("webpack");
const paths = require("./paths");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: paths.build,
    filename: "./assets/js/[name].js"
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6
      }
    }),

    new webpack.HashedModuleIdsPlugin()
  ]
});

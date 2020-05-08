const webpack = require('webpack')
const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


module.exports = merge(common, {
  mode: 'production',
  output: {
    path: paths.build,
    filename: './assets/js/[name].js'
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]
})
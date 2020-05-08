const webpack = require('webpack');
const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const printIp = require('./print-ip')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: paths.public,
    filename: './assets/js/[name].js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: paths.public,
    watchContentBase: true,
    port: 1508,
    https: false,
    overlay: true,
    clientLogLevel: 'none',
    stats: { children: false },
    /*host: "0.0.0.0",
    useLocalIp: true,*/
    /*proxy: {
      "/api": "http://1508.dk"
    },*/
    /*headers: {
      "X-Custom-Foo": "bar"
    },*/
    after: function(app) {
      printIp()
    }
  }
})

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.web.common');
var pjson = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../' + pjson.webfolder),
    filename: './assets/js/[name].js'
  },
  devtool: 'cheap-module-source-map',
  watch: true
})
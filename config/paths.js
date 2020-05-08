const path = require('path')

module.exports = {
  assets: path.resolve(__dirname, '../src/assets'),
  public: path.resolve(__dirname, '../public'),
  build: path.resolve(__dirname, '../build'),
  src: path.resolve(__dirname, '../src'),
  views: path.resolve(__dirname, '../src/views'),
  port: 1508,
}

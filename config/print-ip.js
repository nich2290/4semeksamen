'use strict'

const exec = require('child_process').exec;
const paths = require('./paths');

module.exports = function printIp() {
  console.clear()
  exec("ipconfig getifaddr en0", function(err, stdout, stderr) {
    if (err) {
      console.log('err', err);
      return
    }

    const ip = stdout.slice(0, stdout.length - 1)
    paths.external = ip
    console.log(`
Webpack devServer started at:
------------------------------------------
Internal: http://localhost:${paths.port}
External: http://${ip}:${paths.port}
------------------------------------------
`);
  })
}

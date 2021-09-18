const withPlugins = require("next-compose-plugins");
module.exports = withPlugins([], {});
// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
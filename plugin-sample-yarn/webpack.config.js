
module.exports = (config, { isProd, isDev, isTest }) => {
  /**
   * Customize the webpack by modifying the config object.
   * Consult https://webpack.js.org/configuration for more information
   */

  const forkTsCheckerPlugin = config.plugins.find(plugin => plugin.constructor.name === 'ForkTsCheckerWebpackPlugin')
  forkTsCheckerPlugin.typescriptPath = require.resolve('typescript')

  return config;
}

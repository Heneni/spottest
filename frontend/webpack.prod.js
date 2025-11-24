/* Production-specific Webpack configuration override */

const baseConfig = require('./webpack.config');

const rawSiteUrl = (process.env.REACT_APP_SITE_URL || '').trim();
// Ensure trailing slash if a site URL was provided; otherwise use root '/'
const publicPath = rawSiteUrl ? (rawSiteUrl.endsWith('/') ? rawSiteUrl : rawSiteUrl + '/') : '/';

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'source-map',
  output: {
    ...baseConfig.output,
    publicPath,
  },
  optimization: {
    ...baseConfig.optimization,
    splitChunks: { chunks: 'all' },
    runtimeChunk: 'single',
  },
};
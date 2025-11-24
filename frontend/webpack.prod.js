'use strict';

const baseConfigFactory = require('./webpack.config');
const baseConfig = typeof baseConfigFactory === 'function' ? baseConfigFactory({}, { mode: 'production' }) : baseConfigFactory;

const rawSiteUrl = (process.env.REACT_APP_SITE_URL || '').trim();
const publicPath = rawSiteUrl ? (rawSiteUrl.endsWith('/') ? rawSiteUrl : `${rawSiteUrl}/`) : '/';

/** @type {import('webpack').Configuration} */
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

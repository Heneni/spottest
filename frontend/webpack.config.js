/* Base Webpack configuration (cleaned, legacy Sass function removed, defaults added, simplified env injection) */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('sass');
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const babelLoaderOptions = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ],
};

/**
 * @returns {import('webpack').Configuration}
 */
const buildConfig = () => ({
  entry: {
    index: './src/index.tsx',
    graph: './src/graphStandalone.tsx',
    artistAverager: './src/artistAverager/index.tsx',
    musicGalaxy: './src/musicGalaxy/index.tsx',
  },
  cache: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    clean: true,
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
  experiments: { asyncWebAssembly: true },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: babelLoaderOptions }],
      },
      { test: /\.hbs$/, use: 'handlebars-loader' },
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader', options: { sourceMap: false } }] },
      { test: /\.(ttf|eot|woff2?|svg)$/, type: 'asset/resource', generator: { filename: '[name][ext]' } },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: isDev } },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sassOptions: { includePaths: ['src/'] },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.wasm'],
    modules: [path.resolve('./node_modules'), path.resolve('.'),
    ],
    fallback: { path: false, fs: false },
  },
  optimization: isDev ? {} : { splitChunks: { chunks: 'all' }, runtimeChunk: 'single' },
  plugins: [
    new HtmlWebpackPlugin({ alwaysWriteToDisk: true, title: 'Spotifytrack - Personal Spotify Stats + History', minify: !isDev, template: 'index.hbs', filename: 'index.html', inject: true, chunks: ['index'] }),
    new HtmlWebpackPlugin({ alwaysWriteToDisk: true, title: 'Spotify Artist Relationship Graph', minify: !isDev, template: 'graph-standalone.hbs', filename: 'graph.html', inject: true, chunks: ['graph'] }),
    new HtmlWebpackPlugin({ alwaysWriteToDisk: true, title: 'Artist Averager', minify: !isDev, template: 'artist-averager.hbs', filename: 'artist-averager.html', inject: true, chunks: ['artistAverager'] }),
    new HtmlWebpackPlugin({ alwaysWriteToDisk: true, title: 'Music Galaxy', minify: !isDev, template: 'music-galaxy.hbs', filename: 'music-galaxy.html', inject: true, chunks: ['musicGalaxy'] }),
    // Replace EnvironmentPlugin with DefinePlugin to eliminate undefined variable errors decisively.
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(process.env.REACT_APP_API_BASE_URL || ''),
      'process.env.REACT_APP_SITE_URL': JSON.stringify(process.env.REACT_APP_SITE_URL || ''),
    }),
    new RetryChunkLoadPlugin({
      cacheBust: `function() { return Date.now(); }`,
      retryDelay: 300,
      maxRetries: 5,
      lastResortScript: 'window.location.reload()',
    }),
  ],
  devServer: { historyApiFallback: true, port: 9050, allowedHosts: 'all' },
});

module.exports = buildConfig();

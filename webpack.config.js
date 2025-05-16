// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const fileSystem = require('fs-extra')
const env = require('./utils/env')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')

const ASSET_PATH = process.env.ASSET_PATH || '/'

//
// ————————————————————————————————————————————
// Secrets alias (optional)
// ————————————————————————————————————————————
const alias = {}
const secretsPath = path.join(__dirname, `secrets.${env.NODE_ENV}.js`)
if (fileSystem.existsSync(secretsPath)) {
  alias['secrets'] = secretsPath
}

//
// ————————————————————————————————————————————
// File types to handle as assets
// ————————————————————————————————————————————
const fileExtensions = ['jpg', 'jpeg', 'png', 'gif', 'eot', 'otf', 'svg', 'ttf', 'woff', 'woff2']

//
// ————————————————————————————————————————————
// Dev vs. prod flag
// ————————————————————————————————————————————
const isDevelopment = env.NODE_ENV !== 'production'

//
// ————————————————————————————————————————————
// Base webpack options
// ————————————————————————————————————————————
const options = {
  mode: env.NODE_ENV || 'development',

  // Only build these two pages
  entry: {
    newtab: path.join(__dirname, 'src', 'pages', 'Newtab', 'index.jsx'),
    options: path.join(__dirname, 'src', 'pages', 'Options', 'index.jsx'),
    popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.jsx'),
    background: path.join(__dirname, 'src', 'pages', 'Background', 'index.js'),
    contentScript: path.join(__dirname, 'src', 'pages', 'Content', 'index.js'),
    devtools: path.join(__dirname, 'src', 'pages', 'Devtools', 'index.js'),
    panel: path.join(__dirname, 'src', 'pages', 'Panel', 'index.jsx'),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ['background', 'contentScript', 'devtools'],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ASSET_PATH,
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: new RegExp(`\\.(${fileExtensions.join('|')})$`),
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'source-map-loader',
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias,
    extensions: fileExtensions.map((ext) => `.${ext}`).concat(['.js', '.jsx', '.ts', '.tsx', '.css']),
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),

    // copy and transform manifest.json
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/manifest.json',
          to: path.join(__dirname, 'build'),
          force: true,
          transform(content) {
            const pkg = JSON.parse(content.toString())
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...pkg,
              })
            )
          },
        },
      ],
    }),

    // copy content styles and icons
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/pages/Content/content.styles.css', to: path.join(__dirname, 'build'), force: true },
        { from: 'src/assets/img/icon-128.png', to: path.join(__dirname, 'build'), force: true },
        { from: 'src/assets/img/icon-34.png', to: path.join(__dirname, 'build'), force: true },
      ],
    }),

    // only generate these two HTML files
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Newtab', 'index.html'),
      filename: 'newtab.html',
      chunks: ['newtab'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Options', 'index.html'),
      filename: 'options.html',
      chunks: ['options'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Popup', 'index.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Devtools', 'index.html'),
      filename: 'devtools.html',
      chunks: ['devtools'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Panel', 'index.html'),
      filename: 'panel.html',
      chunks: ['panel'],
      cache: false,
    }),
  ].filter(Boolean),

  infrastructureLogging: {
    level: 'info',
  },
}

//
// ————————————————————————————————————————————
// Devtool vs optimization
// ————————————————————————————————————————————
if (isDevelopment) {
  options.devtool = 'cheap-module-source-map'
} else {
  options.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  }
}

module.exports = options

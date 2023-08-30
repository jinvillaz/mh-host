const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
  output: {
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf_host',
      filename: 'remoteEntry.js',
      remotes: {
        mf1: 'mf_rick_and_morty@http://localhost:4000/remoteEntry.js',
        mf2: 'mf_disney@http://localhost:4001/remoteEntry.js',
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-in18next': {
          singleton: true,
          requiredVersion: deps['react-in18next'],
        },
        'styled-components': {
          singleton: true,
          requiredVersion: deps['styled-components'],
        },
        i18next: {
          singleton: true,
          requiredVersion: deps.i18next,
        },
        'i18next-browser-languagedetector': {
          singleton: true,
          requiredVersion: deps['i18next-browser-languagedetector'],
        },
        'react-icons': {
          singleton: true,
          requiredVersion: deps['react-icons'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
})

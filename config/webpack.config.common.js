const webpack = require('webpack')
const paths = require('./paths')
const fs = require('fs')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const extractCSS = new MiniCssExtractPlugin({
  filename: 'assets/css/[name].css',
  chunkFilename: 'assets/css/[id].css',
})

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(templateDir)
  return templateFiles.map(item => {
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `${templateDir}/${name}.${extension}`
    })
  })
}

const htmlPlugins = generateHtmlPlugins(paths.views)

module.exports = {
  entry: {
    app: [paths.src + '/index.js']
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'public', to: ''}
    ]),
    extractCSS
  ].concat(htmlPlugins, new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  })),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.src,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.pug$/,
        include: paths.views,
        use: [
          'html-loader',
          {
            loader: "pug-html-loader",
            options: {
              exports: false,
              pretty: true,
              data: {
                users: require('../src/json/mockdata-users.json')
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: paths.src,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({root: loader.resourcePath}),
                require('postcss-each')(),
                require('postcss-flexbugs-fixes')(),
                require('postcss-nested')(),
                require('postcss-extend')(),
                require('postcss-color-mod-function')(),
                require('postcss-preset-env')({
                  stage: 0
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        include: paths.src,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/',
          name: '[name].[ext]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: paths.src,
        loader: 'url-loader',
        options: {
          outputPath: 'assets/fonts/',
          name: '[name].[ext]'
        },
      }
    ]
  }
}
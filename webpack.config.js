const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const distPath = path.join(__dirname, './dist')

module.exports = {
  // 入口
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-redux', 'react-dom']
  },
  // 输出到 dist 文件夹
  output: {
    path: distPath,
    filename: '[name].[chunkHash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader?fix=true'
        }],
        include: path.resolve(__dirname, './src'),
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'url-loader',
          // 小于等于8K的图片会被转成base64编码
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude:  ['api'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJSPlugin()
  ],
  // 详细报错信息
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    }
  }
}

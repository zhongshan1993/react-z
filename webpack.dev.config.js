const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const distPath = path.join(__dirname, './dist')

module.exports = {
  // 入口
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-redux', 'react-dom']
  },
  // 输出到 dist 文件夹
  output: {
    path: distPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader?fix=false'
        }],
        include: path.resolve(__dirname, './src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devServer: {
    port: 8080,
    contentBase: distPath,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  // 详细报错信息
  devtool: 'inline-source-map',
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

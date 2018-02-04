const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.config')
const distPath = path.join(__dirname, './dist')

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    host: '0.0.0.0'
  }
}

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b
    }
    return undefined
  }
})(commonConfig, devConfig)
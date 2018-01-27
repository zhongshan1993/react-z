const path = require('path')

const distPath = path.join(__dirname, './dist')

module.exports = {
  // 入口
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  // 输出到 dist 文件夹
  output: {
    path: distPath,
    filename: 'bundle.js'
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
          loader: 'eslint-loader?fix=true'
        }],
        include: path.resolve(__dirname, './src'),
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: distPath,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
    }
  }
}

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'

import store from './redux/store'
import getRouter from 'router/router'

// 初始化
renderWidthHotReload(getRouter())

// 热更新
if (module.hot) {
  module.hot.accept('./router/router.js', () => {
    const getRouter = require('./router/router').default
    renderWidthHotReload(getRouter())
  })
}

function renderWidthHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement} 
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'components/App/App'

// 初始化
renderWidthHotReload(App)

// 热更新
if (module.hot) {
  module.hot.accept('components/App/App', () => {
    const NextApp = require('components/App/App').default
    renderWidthHotReload(NextApp)
  })
}

function renderWidthHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

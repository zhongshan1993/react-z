import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Loading from 'components/Loading/Loading'
import Bundle from './Bundle'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound'
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo'

// 按需加载
const createComponent = component => props => {
  return <Bundle load={component}>
    {
      Component => (Component  ? <Component  {...props} /> : <Loading />)
    }
  </Bundle>
}

const getRouter = () => (
  <div>
    <Switch>
      <Route exact path='/' component={createComponent(Home)} />
      <Route path='/page1' component={createComponent(Page1)} />
      <Route path='/counter' component={createComponent(Counter)} />
      <Route path='/userinfo' component={createComponent(UserInfo)} />
      <Route component={createComponent(NotFound)} />
    </Switch>
  </div>
)

export default getRouter
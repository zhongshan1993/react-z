/**
 * 一个项目有多个reducer，需要将它们整合在一起
 */

import counter from './reducers/counter'
import userInfo from './reducers/userInfo'

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action)
  }
}
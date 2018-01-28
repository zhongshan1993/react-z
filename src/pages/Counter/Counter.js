import React, {Component} from 'react'
import {connect} from 'react-redux'

import {increment, decrement, reset} from 'actions/counter'

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>当前计数为（显示当前计数）</h2>
        <button onClick={() => {console.log('调用自增计数')}}>自增</button>
        <button onClick={() => {console.log('调用自减计数')}}>自减</button>
        <button onClick={() => {console.log('调用重置计数')}}>重置</button>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      counter: state.counter
    }
  },
  {
    increment,
    decrement,
    reset
  }
)(Counter)
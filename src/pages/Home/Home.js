import React, {Component} from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    this.setState({
      count: ++this.state.count
    })
  }
  
  render() {
    return (
      <div>
        <h1 className='page-box'>
          this is home haha!11
        </h1>
        <div>
          <h2>当前计数{this.state.count}</h2>
          <button onClick={this._handleClick}>自增</button>
        </div>
      </div>
    )
  }
}
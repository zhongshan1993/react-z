import React, {Component} from 'react'

import './Page1.css'
import icon from './images/+1.png'

export default class Page1 extends Component {
  render() {
    return (
      <h1 className='page-box'>
        this is page1!
        <img src={icon} />
      </h1>
    )
  }
}
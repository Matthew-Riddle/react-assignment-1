import React, { Component } from 'react'
import classes from './SmallContainer.css'

import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

let arr = []

class SmallContainer extends Component {
  render () {
    return (
      <div className={this.props.classes}>

        {this.props.children}

      </div>
    )
  }
}

export default SmallContainer

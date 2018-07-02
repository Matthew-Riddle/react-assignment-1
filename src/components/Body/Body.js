import React, { Component } from 'react'
import classes from './Body.css'
import profileImg from '../../Matthew.jpg'
import SmallContainer from './SmallContainer/SmallContainer'
import SmallContainerCss from './SmallContainer/SmallContainer.css'
import MiddleContainer from './MiddleContainer/MiddleContainer'
import RightContent from './SmallContainer/RightContent/RightContent'
import RightContentCss from './SmallContainer/RightContent/RightContent.css'
import LeftContent from './SmallContainer/LeftContent/LeftContent'
class Body extends Component {
  render () {
    return (
      <body>

        <div class='ContentWrap'>

          <SmallContainer classes={SmallContainerCss.LeftContainer}>
            <LeftContent />
          </SmallContainer>

          <MiddleContainer />
          <SmallContainer classes={SmallContainerCss.RightContainer}>
            <RightContent />
          </SmallContainer>

        </div>
        {/* <!-- // Content wrap end --> */}

      </body>
    )
  }
}

export default Body

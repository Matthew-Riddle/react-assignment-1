import React from 'react'
import classes from './RightContent.css'

const RightContent = props => {
  return (
    <footer id={classes.RightContainer}>
      <div class={classes.TopRight}>
        <h1>Who to follow</h1>
      </div>
      <div class={classes.InfoOnRight}>
        <p>
          ©2018 Tweeter © 2018 TwitterAboutHelp CenterTermsPrivacy policyCookiesAds info Brand Blog Status Apps Jobs
          Marketing Businesses Developers
        </p>
      </div>
    </footer>
  )
}

export default RightContent

import React from 'react'
import classes from '../SmallContainer.css'
import profileImg from '../../../../Matthew.jpg'
const LeftContent = props => {
  return (
    <div class='wrap'>
      <div class={classes.ProfileBox}>
        <div class={classes.BlueDecor} />
        <img
          src={profileImg}
          alt='Matthew Riddle'
          class={`${classes.LeftContainer} ${classes.ProfileBox} ${classes.ProfileImg}`}
        />
        <h1>Matthew Riddle</h1>
        <p>@mriddle</p>
      </div>

      <div class={classes.TrendsLeft}>
        <h1>Trends for you</h1>
      </div>
    </div>
  )
}

export default LeftContent

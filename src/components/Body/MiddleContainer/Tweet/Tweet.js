import React from 'react'
import classes from './Tweet.css'

const Tweet = props => {
  return (
    <div className='Tweet'>
      {props.avatar
        ? <img className={classes.Avatar} src={props.avatar} alt='' />
        : ''}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img src={props.img} alt='' />
    </div>
  )
}

export default Tweet

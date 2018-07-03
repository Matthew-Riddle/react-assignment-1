import React, { Component } from 'react'
import classes from './MiddleContainer.css'
import profileImg from '../../../Matthew.jpg'
// import downs from '../../../Downs.jpg'
import Tweet from './Tweet/Tweet'

class MiddleContainer extends Component {
  render () {
    return (
      <div className={classes.MiddleContainer}>
        <div className={classes.SearchContainer}>
          <img
            src={profileImg}
            alt='Matthew Riddle'
            className={`${classes.MiddleContainer} ${classes.SearchContainer} ${classes.TweetSearchImg}`}
          />
          <input
            type='text'
            placeholder='Whats Happening?'
            id={classes.MidSearch}
            className={`${classes.MiddleContainer} ${classes.Navigation}`}
          />
        </div>
        <div className={classes.MiddleContent}>
          {/* <Tweet
            avatar={profileImg}
            title='First Tiger to get into Evergreen State College!'
            content='Today kenny the tiger has made his way into the
            prestigous Evergreen state college despite his disability.'
            img={downs}
          /> */}

          {this.props.tweets.map((tweet, idx) => (
            <Tweet
              key={idx}
              avatar={tweet.avatar}
              title={tweet.title}
              content={tweet.content}
              img={tweet.img}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default MiddleContainer

import React, { Component } from 'react'
import classes from './App.css'
import profileImg from './Matthew.jpg'
import downs from './Downs.jpg'

import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Moments from './components/Moments/Moments'
import axios from './axios-instance'
import uuid from 'uuid'

class App extends Component {
  state = {
    tweets: []
  }

  createTweet = text => {
    const key = uuid.v4()
    const tweets = {
      [key]: {
        id: key,
        avatar: profileImg,
        title: 'Matthew Riddle',
        content: text,
        img: ''
      },
      ...this.state.tweets
    }
    axios.put('tweets.json', tweets).then(() => {
      this.setState(prevState => ({
        tweets
      }))
    })
  }

  deleteTweet = id => {
    axios.delete(`tweets/${id}.json`).then(() =>
      this.setState(prevState => ({
        tweets: Object.values(prevState.tweets).filter(
          tweet => tweet.id !== id
        )
      }))
    )
  }

  componentDidMount () {
    axios.get('tweets.json').then(response => {
      const tweets = response.data
      console.log(this.state)
      console.log(tweets)
      this.setState(prevState => ({
        ...prevState,
        tweets
      }))
      console.log(this.state)
    })
  }

  render () {
    return (
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Body
                tweets={this.state.tweets}
                createTweet={this.createTweet}
                deleteTweet={this.deleteTweet}
              />
            )}
          />
          <Route path='/Moments' render={() => <Moments />} />
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)

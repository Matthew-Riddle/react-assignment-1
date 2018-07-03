import React, { Component } from 'react'
import classes from './App.css'
import profileImg from './Matthew.jpg'
import downs from './Downs.jpg'

import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Moments from './components/Moments/Moments'

class App extends Component {
  state = {
    tweets: [
      {
        avatar: downs,
        title: 'Its all ogre now',
        content: 'Rip',
        img: downs
      },
      {
        avatar: profileImg,
        title: 'Its all ogre now',
        content: 'Rip',
        img: downs
      },
      {
        avatar: '',
        title: 'Its all ogre now',
        content: 'Rip',
        img: ''
      }
    ]
  }

  createTweet = text => {
    const tweets = [
      {
        avatar: profileImg,
        title: '',
        content: text,
        img: ''
      },
      ...this.state.tweets
    ]

    this.setState(prevState => ({
      tweets
    }))
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
              <Body tweets={this.state.tweets} createTweet={this.createTweet} />
            )}
          />
          <Route path='/Moments' render={() => <Moments />} />
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)

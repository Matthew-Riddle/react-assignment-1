import React, { Component } from 'react'
import classes from './App.css'

import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
// import Home from './containers/Home/Home'
// import Section from './components/Section/Section'

// import createImage from './img/create.jpg'
// import exploreImage from './img/explore.jpg'
// import shareImage from './img/share.jpg'

class App extends Component {
  render () {
    // <div className={classes.App}>
    return (
      <div className='App'>
        <Navbar />
        <Body />
      </div>
    )
  }
}

export default App

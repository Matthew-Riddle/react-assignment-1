import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <header id='navigation'>

        <div className='content-wrap'>
          <div className='header-left'>
            <a href='./tweeter.html'>
              <i className='fas fa-home' />Home
            </a>
            <a href='./moments.html'>
              <i className='fas fa-bolt' />Moments
            </a>
            <a href='./notifications.html'>
              <i className='fas fa-bell' />Notifications
            </a>
            <a id='open-modal'>
              <i className='fas fa-envelope' />Messages
            </a>
          </div>

          <div className='header-center'>
            <i className='fab fa-twitter' />
          </div>

          <div className='header-right'>
            <input
              type='text'
              placeholder='Search..'
              id='search'
              className='header-right navigation'
            />
            <div className='header-right search-img'>
              <i className='fas fa-search' />
            </div>
            <img
              src='./Matthew.jpg'
              alt='Matthew Riddle'
              className='navigation header-right nav-profile-img'
            />
            <button
              type='button'
              name='Twit'
              className='navigation header-right jelly-button'
            >
              Tweet
            </button>

          </div>
        </div>

      </header>
    )
  }
}

export default Navbar

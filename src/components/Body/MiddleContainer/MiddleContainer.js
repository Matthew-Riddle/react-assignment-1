import React, { Component } from 'react'
import classes from './MiddleContainer.css'
import profileImg from '../../../Matthew.jpg'

class MiddleContainer extends Component {
  render () {
    return (
      <div class={classes.MiddleContainer}>
        <div class={classes.SearchContainer}>
          <img
            src={profileImg}
            alt='Matthew Riddle'
            class={`${classes.MiddleContainer} ${classes.SearchContainer} ${classes.TweetSearchImg}`}
          />
          <input
            type='text'
            placeholder='Whats Happening?'
            id={classes.MidSearch}
            class={`${classes.MiddleContainer} ${classes.Navigation}`}
          />
        </div>
        <div class={classes.MiddleContent}>
          <h1>What? No tweets yet?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ipsum consequat nisl vel pretium lectus. Imperdiet nulla malesuada pellentesque elit. Faucibus
            in ornare quam viverra. Vestibulum mattis ullamcorper velit sed ullamcorper. Sagittis vitae et leo duis.
            Eu consequat ac felis donec et. At tellus at urna condimentum mattis pellentesque id nibh. Ut tortor
            pretium viverra suspendisse potenti nullam ac tortor. Enim tortor at auctor urna. Cursus euismod quis
            viverra nibh cras pulvinar mattis nunc. Amet risus nullam eget felis eget nunc lobortis mattis. Quam
            viverra orci sagittis eu volutpat odio. Aenean sed adipiscing diam donec adipiscing tristique risus.
            Consectetur adipiscing elit ut aliquam purus sit. Eget magna fermentum iaculis eu non diam phasellus
            vestibulum lorem. Faucibus pulvinar elementum integer enim neque volutpat ac. Phasellus faucibus scelerisque
            eleifend donec pretium. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer.
            Et malesuada fames ac turpis egestas sed tempus urna. Iaculis eu non diam phasellus vestibulum lorem.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Sed vulputate mi sit amet. Ut lectus
            arcu bibendum at varius. Sit amet est placerat in egestas erat imperdiet sed euismod. Magna fermentum
            iaculis eu non diam phasellus. Eros in cursus turpis massa tincidunt dui ut ornare. Elementum sagittis
            vitae et leo duis ut diam quam. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Eu lobortis
            elementum nibh tellus molestie nunc. Phasellus vestibulum lorem sed risus ultricies tristique nulla.
            Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Viverra ipsum nunc aliquet
            bibendum enim facilisis. Turpis massa sed elementum tempus egestas sed. Donec massa sapien faucibus et
            molestie ac. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Praesent tristique
            magna sit amet purus gravida quis. Pellentesque massa placerat duis ultricies lacus sed turpis. In dictum
            non consectetur a erat. Porttitor rhoncus dolor purus non enim praesent. Malesuada fames ac turpis egestas
            maecenas pharetra convallis posuere morbi. Diam volutpat commodo sed egestas egestas fringilla phasellus
            faucibus. Hendrerit dolor magna eget est lorem ipsum dolor sit. Et tortor consequat id porta. Faucibus
            et molestie ac feugiat sed lectus. Sit amet dictum sit amet justo. Amet nisl purus in mollis nunc sed
            id semper. Gravida arcu ac tortor dignissim. Tempor orci dapibus ultrices in iaculis nunc. Mattis vulputate
            enim nulla aliquet. Malesuada fames ac turpis egestas maecenas. Euismod lacinia at quis risus sed vulputate
            odio ut enim. Placerat orci nulla pellentesque dignissim enim sit amet. Dui vivamus arcu felis bibendum
            ut. Tellus in metus vulputate eu. Lobortis feugiat vivamus at augue eget arcu dictum varius. Quam quisque
            id diam vel quam elementum pulvinar etiam non. Commodo quis imperdiet massa tincidunt. Arcu odio ut sem
            nulla pharetra diam sit amet. Id ornare arcu odio ut. Quis enim lobortis scelerisque fermentum dui faucibus
            in. Aenean et tortor at risus viverra adipiscing at. Donec massa sapien faucibus et molestie ac. Quisque
            sagittis purus sit amet volutpat. Vel turpis nunc eget lorem dolor. Suscipit adipiscing bibendum est
            ultricies. Volutpat consequat mauris nunc congue. Sit amet mattis vulputate enim nulla aliquet. Morbi
            tincidunt ornare massa eget egestas. Ut etiam sit amet nisl purus in mollis nunc sed. Nunc sed augue
            lacus viverra. Vitae nunc sed velit dignissim.
          </p>
        </div>
      </div>
    )
  }
}

export default MiddleContainer

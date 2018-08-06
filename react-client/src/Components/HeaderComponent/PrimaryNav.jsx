import React, { Component } from 'react'


export default class PrimaryNav extends Component {
  render () {
    return (
      <header>
        <div id='navLeft'>
          <button>Home</button>
          <button>Philosophy</button>
          <button>Services</button>
        </div>
        <div id='navMid'>
          <img src={require('../../Assets/templogo.png')} />
        </div>
        <div id='navRight'>
          <button>Testimonials</button>
          <button>Gallery</button>
          <button>Contact</button>
        </div>
      </header>
    )
  }
}

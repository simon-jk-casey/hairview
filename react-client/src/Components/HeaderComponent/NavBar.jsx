import React, { Component } from 'react'
import { Link } from 'react-router-dom' // hash router? probably

export default class NavBar extends Component {
  render () {
    return (
      <header>
        <ul id='headerbuttons'>
          <li className='navButton'><Link to=''>Home</Link></li>
        </ul>
      </header>
    )
  }
}

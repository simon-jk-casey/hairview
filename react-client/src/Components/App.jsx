import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//will prob need to change to hash router for anchor links
import { browserHistory } from 'react-router'
import HomePage from './HomePage'
import NavBar from './HeaderComponent/NavBar'
import Footer from './FooterComponent/Footer'
import PrimaryNav from './HeaderComponent/PrimaryNav'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <PrimaryNav />
          {/* <Route name='home' exact path='/' component={HomePage} />
          <Footer /> */}
        </div>
      </Router>
    )
  }
}

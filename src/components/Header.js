import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Nithin Verma</strong>, a super simple
        <br />
        A CS Under Grad at K.L.E University
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header

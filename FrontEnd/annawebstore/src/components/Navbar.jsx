import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { socialLinks } from '../data'
import '../navbar.css'
// import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            {social.map((link) => {
              const { text, url, id } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {socialLinks.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <a key={id} href={url}>
                {icon}
              </a>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

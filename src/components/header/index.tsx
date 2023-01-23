import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../../src/assets/icons/logo.png'

import './header.scss'

function Header() {
  return (
    <div className="header" >
        <div className="nav">
          <img src={logo} alt="Juripass Logo" />
          <div className='links'>
            <Link className='link' to='./'>Home</Link>
            <Link className='link' to='/about'>About Us</Link>
            <Link className='link' to='/policy'>Policy</Link>
          </div>
          <div className='logsig'>
            <Link className='loginbtn' to='/login'>Login</Link>
            <Link className='signupbtn' to='/signup'>Sign Up</Link>
          </div>
        </div>
    </div>
  )
}

export default Header
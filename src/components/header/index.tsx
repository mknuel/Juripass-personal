import React from 'react'
import { NavLink } from 'react-router-dom'
import { ASSETS } from '../../assets/icons'
import * as ROUTE from '../../constants/routes'
import { BtnPrimary, BtnTertiary } from '../button'

function Header() {
  const active = {
    borderBottom: '3px solid #0D294D'
  }
  return (
    <header className='header con'>
      <div className='header-logo'>
        <img src={ASSETS.LogoDark} alt="logo" />
      </div>
      <nav className='header-nav'>
        <div>
          <NavLink to={ROUTE.LANDING} style={({ isActive }) => isActive ? active : undefined}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to={ROUTE.ABOUT}>
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink to={ROUTE.POLICY}>
            Privacy Policy
          </NavLink>
        </div>
      </nav>
      <div className='header-btns'>
        <BtnPrimary>Login</BtnPrimary>
        <BtnTertiary>Sign Up</BtnTertiary>
      </div>
    </header>
  )
}

export default Header
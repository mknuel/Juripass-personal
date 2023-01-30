import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { LOGO } from '../../assets/logos/logo'
import * as ROUTE from '../../constants/routes'
import { BtnPrimary, BtnSecondary, BtnTertiary } from '../button'
import './index.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const active = {
    borderBottom: '3px solid #0D294D',
    fontWeight: 'bold'
  }
  return (
    <header className='header'>
      <div className='con'>
        <div className='header-logo'>
          <img src={LOGO.LogoDark} alt="logo" />
        </div>
        <nav className='header-nav'>
          <div>
            <NavLink to={ROUTE.LANDING} style={({ isActive }) => isActive ? active : undefined}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to={ROUTE.ABOUT} style={({ isActive }) => isActive ? active : undefined}>
              About Us
            </NavLink>
          </div>
          <div>
            <NavLink to={ROUTE.POLICY} style={({ isActive }) => isActive ? active : undefined}>
              Privacy Policy
            </NavLink>
          </div>
        </nav>
        <div className='header-btns'>
          <BtnSecondary>Login</BtnSecondary>
          <BtnPrimary>Sign Up</BtnPrimary>
        </div>

        <Menu className='header-menu' onClick={() => setIsOpen(current => !current)} />
      </div>

      {
        isOpen &&
        <div className='header-mobile'>
          <nav className='header-mobile-nav'>
            <div>
              <NavLink to={ROUTE.LANDING} style={({ isActive }) => isActive ? active : undefined}>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to={ROUTE.ABOUT} style={({ isActive }) => isActive ? active : undefined}>
                About Us
              </NavLink>
            </div>
            <div>
              <NavLink to={ROUTE.POLICY} style={({ isActive }) => isActive ? active : undefined}>
                Privacy Policy
              </NavLink>
            </div>
          </nav>
          <div className='header-mobile-btns'>
            <BtnSecondary>Login</BtnSecondary>
            <BtnPrimary>Sign Up</BtnPrimary>
          </div>
        </div>
      }

    </header>
  )
}

export default Header
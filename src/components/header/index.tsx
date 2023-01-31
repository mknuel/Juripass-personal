import { HambergerMenu } from 'iconsax-react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LOGO } from '../../assets/logos/logo'
import * as ROUTE from '../../constants/routes'
import { BtnPrimary, BtnSecondary } from '../button'
import './index.scss';

function Header() {
  const navigate = useNavigate()
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
          <BtnSecondary onClick={() => navigate('/login')}>Login</BtnSecondary>
          <BtnPrimary onClick={() => navigate('/signup')}>Sign Up</BtnPrimary>
        </div>

        <HambergerMenu size="32" color="#FF8A65" onClick={() => setIsOpen(current => !current)} className='header-menu' />
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
            <BtnSecondary onClick={() => navigate('/login')}>Login</BtnSecondary>
            <BtnPrimary onClick={() => navigate('/signup')}>Sign Up</BtnPrimary>
          </div>
        </div>
      }

    </header>
  )
}

export default Header
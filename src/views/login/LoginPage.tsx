import React, { useState } from 'react'

import { Link } from 'react-router-dom'


import logo from '../../../src/assets/images/logo.png'
import justice from '../../../src/assets/images/justice.png'
import eye from '../../../src/assets/icons/eye-slash.png'

import './login.scss'


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="s-body">
      <div className='left-s'>
        <div className="s-main">
          <div className="sp-logo">
            <img className="s-logo" src={logo}></img>
          </div>
          <div className="wc">
            <div className='heading' >Welcome back</div>
            <span>Log into your account to continue.</span>
          </div>
        <div className='l-body'>
          <div className="login">
            <p className="label">Email</p>
            <input className="user" placeholder="Email" type="text" />
            <div className="p-word">
              <p className="label">Password</p>
              <div className='pass-icon'>
                  <input className="pass" placeholder="Password" type={showPassword ? 'text': 'password'} />
                  <img src={!showPassword ? eye : ''} className="eye" onClick={() => setShowPassword(!showPassword)} />
              </div>  
            </div>
              <div className="cb">
                <div className='rem'>
                  <input className="check" type="checkbox"/>
                  <p className="check-name">Remember me</p>
                </div>
                <Link className="f-pass" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="s-button">
              <button className="sign-btn">Log in</button>
            </div>
            <div className='sign-up'>
              <p>Don't have an account?</p>
              <a className='s-link' href="./signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default LoginPage
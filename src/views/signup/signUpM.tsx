import React, { useState } from 'react'

import { Link } from 'react-router-dom'


import logo from '../../../src/assets/images/logo.png'
import justice from '../../../src/assets/images/justice.png'
import eye from '../../../src/assets/icons/eye-slash.png'

import '../login/login.scss'


const SignUpM = () => {
  const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="s-body">
      <div className='left-s'>
        <div className="s-main">
          <div className="sp-logo">
            <img className="s-logo" src={logo}></img>
          </div>
          <div className="wc">
            <div className='heading' >Create Account</div>
            <span>Join hundred of Counsels already filing their Court processes online with Juripass</span>
          </div>
        <div className='l-body'>
          <div className="login">
            <div className="p-word">
                <p className="label">First Name</p>
                <input className="user" placeholder="First name" type="text" />
            </div>
            <div className='p-word'>
                <p className="label">Last Name</p>
                <input className="user" placeholder="Last name" type="text" />
            </div>
                <div className='p-word'>
            <p className="label">Email</p>
            <input className="user" placeholder="Email" type="text" />
                </div>
                <div className='p-word'>
            <p className="label">Phone Number</p>
            <input className="user" placeholder="Enter Phone Number" type="text" />
                     </div>
            <div className="p-word">
              <p className="label">Password</p>
              <div className='pass-icon'>
                  <input className="pass" placeholder="Password" type={showPassword ? 'text': 'password'} />
                  <img src={!showPassword ? eye : ''} className="eye" onClick={() => setShowPassword(!showPassword)} />
              </div>  
            <div className="p-word">
              <p className="label">Confirm Password</p>
              <div className='pass-icon'>
                  <input className="pass" placeholder="Confirm Password" type={showPassword ? 'text': 'password'} />
                  <img src={!showPassword ? eye : ''} className="eye" onClick={() => setShowPassword(!showPassword)} />
              </div>  
            </div>
              <div className="cb">
                <div className='rem'>
                  <input className="check" type="checkbox"/>
                  <p className="check-name">I agree to the{' '} </p>
                <Link className="f-pass" style={{marginLeft: '5px'}} to="/">
                  Terms of Use
                </Link>
                </div>
              </div>
            </div>
            <div className="s-button">
              <button className="sign-btn">Sign Up</button>
            </div>
            <div className='sign-up'>
              <p>Already have an account?</p>
              <a className='s-link' href="./login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default SignUpM
import React from 'react'

import {  useNavigate } from 'react-router-dom'


import logo from '../../../src/assets/images/logo.png'

import './signUp.scss'

function SignUp() {
  const navigate = useNavigate()

  setTimeout(() => {
            navigate('/login')
        }, 5000);
  return (<div className="s-body">
      <div className='left-s'>
        <div className="s-main">
          <div className="sp-logo">
            <img className="s-logo" src={logo} alt='logo'></img>
          </div>
          <div className="wc">
            <div className='heading' >Create Account</div>
            <span>Join hundred of Counsels already filing their court processes online with Juripass</span>
        </div>
        </div>
      </div>
  </div>
  )
}

export default SignUp
import React, { useState } from 'react'

import {  useNavigate } from 'react-router-dom'


import logo from '../../../src/assets/images/logo.png'

import './signUp.scss'
import SignUpM from './signUpM'

function SignUp() {
  const navigate = useNavigate()
  const [page, setPage] = useState(<PreSignUp/>)

  setTimeout(() => {
            setPage(<SignUpM/>)
        }, 5000);
  return (
    <>
       {
      page
    }
    </>
  )
}

export default SignUp

const PreSignUp = () => {
  return (
    <div className="s-body">
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
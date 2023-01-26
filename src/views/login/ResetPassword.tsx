import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import icon from '../../../src/assets/icons/Icon.png'
import { ToastContainer, toast} from 'react-toastify';
import logo from '../../../src/assets/images/logo.png'
import justice from '../../../src/assets/images/justice.png'
import eye from '../../../src/assets/icons/eye-slash.png'

import './login.scss'

const ResetPassword = () => {
     const [showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate()
    
    const notify = () => {
        toast(
        <div className='toast'>
            <img src={icon} alt="" />
            <div className='toast-h'>
                <p>New password set successfully!</p>
            </div>
            <div className='toast-d'>
                <p>Login with your new password to continue to your account.</p>
            </div>
        </div>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }
    );
    
        setTimeout(() => {
            navigate('/reset-password')
        }, 5000);
    }
  
    return (
        <>
            <ToastContainer
            />
        <div className="s-body">
      <div className='left-s'>
        <div className="s-main">
          <div className="sp-logo">
            <img className="s-logo" src={logo}></img>
          </div>
          <div className="wc">
            <div className='heading' >Reset Password</div>
            <span>Create a new password to your account.</span>
          </div>
        <div className='l-body'>
          <div className="login">
            <div className="p-word">
              <p className="label">New password</p>
              <div className='pass-icon'>
                  <input className="pass" placeholder="Enter new password" type={showPassword ? 'text': 'password'} />
                  <img src={!showPassword ? eye : ''} className="eye" onClick={() => setShowPassword(!showPassword)} />
              </div>  
            </div>
            <div className="p-word">
              <p className="label">Confirm password</p>
              <div className='pass-icon'>
                  <input className="pass" placeholder="Confirm new password" type={showPassword ? 'text': 'password'} />
                  <img src={!showPassword ? eye : ''} className="eye" onClick={() => setShowPassword(!showPassword)} />
              </div>  
            </div>
            </div>
            <div className="s-button">
              <button className="sign-btn">Reset password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResetPassword
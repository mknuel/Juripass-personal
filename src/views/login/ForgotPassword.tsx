import React from 'react'

import {  useNavigate } from 'react-router-dom'


import logo from '../../../src/assets/images/logo.png'
import icon from '../../../src/assets/icons/Icon.png'
import { ToastContainer, toast} from 'react-toastify';

import './login.scss'

const ForgotPassword = () => {
    const navigate = useNavigate()
    
    const notify = () => {
        toast(
        <div className='toast'>
            <img src={icon} alt="logo" />
            <div className='toast-h'>
                <p>Instructions sent!</p>
            </div>
            <div className='toast-d'>
                <p>Instructions to set your password have been sent to your email.</p>
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
                        <img className="s-logo" src={logo} alt='logo'></img>
                    </div>
                    <div className="wc">
                        <div className='heading' >Forgot Password</div>
                        <span>Enter your registered email address to receive password reset instructions.</span>
                    </div>
                    <div className='l-body'>
                    <div className="login">
                        <p className="label">Email</p>
                        <input className="user" placeholder="abc@xyz.com" type="text" />
                        </div>
                        <div className="s-button">
                        <button onClick={notify} className="sign-btn">Send instructions</button>
                        </div>
                        <div className='sign-up'>
                        <p>Don't have an account?</p>
                        <a className='s-link' href="./signup">Sign up</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ForgotPassword
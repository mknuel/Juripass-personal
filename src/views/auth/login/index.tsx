import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../../assets/logos/logo'
import { BtnPrimary } from '../../../components/button'
import InputField from '../../../components/inputfield'
import Page from '../../../components/page'

function Login() {
  const navigate = useNavigate()
  return (
    <Page title='Juripass | Login'>
      <div className='auth'>
        <div className='auth-left'>
          <div className='auth-left-con'>
            <div className='c'>
              <img src={LOGO.LogoDark} alt="logo" />
              <h1>Welcome Back</h1>
              <p>Log into your account to continue.</p>
              <div>
                <InputField
                  label='Email'
                  name='email'
                  placeholder='Email'
                  type="email"
                />
                <InputField
                  label='Password'
                  name='password'
                  placeholder='Password'
                  type="password"
                />
                <div className='password-actions'>
                  <div>
                    <input type="checkbox" id='remember' />
                    <label htmlFor='remember'> Remember Me</label>
                  </div>
                  <b onClick={() => navigate('/forgot-password')}>Forgot Password?</b>
                </div>
                <BtnPrimary onClick={() => navigate('/dashboard')}>Log in</BtnPrimary>
                <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
              </div>
            </div>
          </div>

        </div>
        <div className='auth-right'>

        </div>
      </div>
    </Page>
  )
}

export default Login
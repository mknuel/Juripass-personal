import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../../assets/logos/logo'
import { BtnPrimary } from '../../../components/button'
import InputField from '../../../components/inputfield'
import Page from '../../../components/page'

function SignUp() {
  const navigate = useNavigate()
  return (
    <Page title='Juripass | Register'>
      <div className='auth'>
        <div className='auth-left'>
          <div className='auth-left-con signup'>
            <div className='c'>
              <img src={LOGO.LogoDark} alt="logo" />
              <h1>Create Account</h1>
              <p>Join hundreds of Counsels already filing their Court processes<br /> online with Juripass</p>
              <div>
                <InputField
                  label='Name of Firm'
                  name='name'
                  placeholder='Enter Full Name of Firm'
                  type="text"
                />
                <InputField
                  label='Email of Firm'
                  name='email'
                  placeholder='Enter Email of Firm'
                  type="email"
                />
                <InputField
                  label='Phone Number'
                  name='phone'
                  placeholder='Enter Phone Number'
                  type="tel"
                />
                <InputField
                  label='Password'
                  name='password'
                  placeholder='Password'
                  type="password"
                />
                <InputField
                  label='Confirm Password'
                  name='confirm-password'
                  placeholder='Confirm New Password'
                  type="password"
                />
                <div className='password-actions'>
                  <div>
                    <input type="checkbox" id='remember' />
                    <label htmlFor='remember'> I agree to the <span onClick={() => navigate('/policy')}>Terms of Use</span></label>
                  </div>
                </div>
                <BtnPrimary onClick={() => navigate('/dashboard')}>Sign Up</BtnPrimary>
                <p>Already have an account? <span onClick={() => navigate('/login')}>Log In</span></p>
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

export default SignUp
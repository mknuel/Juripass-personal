import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../../assets/logos/logo'
import { BtnPrimary } from '../../../components/button'
import InputField from '../../../components/inputfield'
import Page from '../../../components/page'

function ForgotPassword() {
   const navigate = useNavigate()
   return (
      <Page title='Juripass | Forgot Password'>
         <div className='auth'>
            <div className='auth-left'>
               <div className='auth-left-con'>
                  <div className='c'>
                     <img src={LOGO.LogoDark} alt="logo" />
                     <h1>Forgot Password?</h1>
                     <p>Enter your registered email address to receive<br /> password reset instructions.</p>
                     <div>
                        <InputField
                           label='Email'
                           name='email'
                           placeholder='abc@xyz.com'
                           type="email"
                        />
                        <BtnPrimary onClick={() => navigate('/reset-password')}>Send Instructions</BtnPrimary>
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

export default ForgotPassword
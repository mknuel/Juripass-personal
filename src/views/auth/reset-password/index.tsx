import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../../assets/logos/logo'
import { BtnPrimary } from '../../../components/button'
import InputField from '../../../components/inputfield'
import Page from '../../../components/page'

function RestPassword() {
   const navigate = useNavigate()
  return (
   <Page title='Juripass | Reset Password'>
   <div className='auth'>
      <div className='auth-left'>
         <div className='auth-left-con'>
            <div className='c'>
               <img src={LOGO.LogoDark} alt="logo" />
               <h1>Reset Password</h1>
               <p>Create a new password for your account.</p>
               <div>
                  <InputField
                     label='New Password'
                     name='password'
                     placeholder='Enter New Password'
                     type="password"
                  />
                  <InputField
                     label='Confirm Password'
                     name='confirm-password'
                     placeholder='Confirm New Password'
                     type="password"
                  />
                  <BtnPrimary onClick={() => navigate('/dashboard')}>Reset Password</BtnPrimary>
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

export default RestPassword
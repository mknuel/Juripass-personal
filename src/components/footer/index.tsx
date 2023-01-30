import React from 'react'
import { LOGO } from '../../assets/logos/logo'
import { BtnPrimary } from '../button'

import './footer.scss'

import logo from '../../../src/assets/icons/logo.png'
import footerbg from '../../../src/assets/images/Rectangle 5.png'
import newslbg from '../../../src/assets/images/Rectangle 16.png'

function Footer() {
  return (
    <div>
      <div className='subscribe'>
        <div>
          <h1>Subscribe Newsletter</h1>
          <div className='subscribe-form'>
            <input type="text" placeholder='Enter your email' />
            <BtnPrimary>Enter</BtnPrimary>
          </div>
        </div>
      </div>
      <footer className='footer con'>
        <div className='footer-con'>
          <div className='footer-left'>
            <img src={LOGO.LogoLight} alt='logo' />
            <p>
              We believe that justice delivery in Nigeria will be more effective and efficient if interfaced with technology.
            </p>
          </div>
          <div className='footer-right'>
            <div className='footer-col'>
              <div className='footer-col-heading'>
                <h4 >Quick Links</h4>
                <hr />
              </div>
              <ul>
                <li>My Account</li>
                <li>Order</li>
                <li>Payments</li>
                <li>Returns</li>
                <li>Manage Deliveries</li>
              </ul>
            </div>
            <div className='footer-col'>
              <div className='footer-col-heading'>
                <h4 >Resources</h4>
                <hr />
              </div>
              <ul>
                <li>My Account</li>
                <li>Order</li>
                <li>Payments</li>
                <li>Returns</li>
                <li>Manage Deliveries</li>
              </ul>
            </div>
            <div className='footer-col'>
              <div className='footer-col-heading'>
                <h4>Support</h4>
                <hr />
              </div>
              <ul>
                <li>My Account</li>
                <li>Order</li>
                <li>Payments</li>
                <li>Returns</li>
                <li>Manage Deliveries</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='footer-break'/>
        <div className='footer-rights'>
          <span>&copy; 2022 / All Right Reserved</span>
          <div>
            <span>Terms</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
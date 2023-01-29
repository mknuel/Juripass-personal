import React from 'react'
import { LOGO } from '../../assets/logos/logo'

import './footer.scss'

import logo from '../../../src/assets/icons/logo.png'
import footerbg from '../../../src/assets/images/Rectangle 5.png'
import newslbg from '../../../src/assets/images/Rectangle 16.png'

function Footer() {
  return (
    <div>
      <div className='subscribe'>
        
      </div>
      <footer className='footer con'>
        <div className='footer-con'>
          <div className='footer-left'>
            <img src={LOGO.LogoLight} alt="logo" />
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
      </footer>
    </div>
  )
}

export default Footer
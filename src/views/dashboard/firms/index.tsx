import React from 'react'
import { Link } from 'react-router-dom'
import { BtnSecondary, BtnTertiary } from '../../../components/button'
import Head from '../ui/head'
import './index.scss'



function Firms() {


  return (
    <div id='firms'>
      <Head showFull={false} />
      <div className="firms-header">
        <h5>My Firms</h5>
        <Link to='/'><BtnTertiary>+ Create New Firm</BtnTertiary></Link>
      </div>
      <div className="firm">
        <div className='firm-profile'>
          <div className='logo'>
            <span>DA</span>
          </div>
          <h4 className="name">Dapo Agbede & C0.</h4>
          <p>Number of Lawyers : 6</p>
          <p>My Role : Admin</p>
          <Link to='lawyer'><BtnSecondary>View Law Firm</BtnSecondary></Link>
        </div>
        <div className='firm-profile'>
          <div className='logo'>
            <span>SP</span>
          </div>
          <h4 className="name">Sportlicitors LP</h4>
          <p>Number of Lawyers : 6</p>
          <p>My Role : Members</p>
          <Link to='lawyer'><BtnSecondary>View Law Firm</BtnSecondary></Link>
        </div>
        <div className='firm-profile'>
          <div className='logo'>
            <span>DA</span>
          </div>
          <h4 className="name">Dapo Agbede & C0.</h4>
          <p>Number of Lawyers : 6</p>
          <p>My Role : <span>Admin</span></p>
          <Link to='lawyer'><BtnSecondary>View Law Firm</BtnSecondary></Link>
        </div>
      </div>
    </div>
  )
}

export default Firms



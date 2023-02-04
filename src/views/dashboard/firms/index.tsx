import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/Firms.scss'
import Lawyer from './Lawyer'
import * as ROUTE from "../../../constants/routes";



function Firms (){
  

  return (
    <div>
      <div className="firmheader">
        <h5>My Firms</h5>
        <Link to='/'>+ Create New Firm</Link>
      </div>
      <div className="allFirms">
        <div className='firmProfile'>
          <div className='logo'>
            <span>DA</span>
          </div>
          <h4 className="name">Dapo Agbede & C0.</h4>
          <p>Number of Lawyers : 6</p>
          <p>My Role : Admin</p>
          <Link to='lawyer'><button>View Law Firm</button></Link>
        </div>
        <div className='firmProfile'>
          <div className='logo'>
            <span>SP</span>
          </div>
          <h4 className="name">Sportlicitors LP</h4>
          <p>Number of Lawyers : 6</p>
          <p>My Role : Members</p>
          <Link to='lawyer'><button>View Law Firm</button></Link>

        </div>
        <div className='firmProfile'>
          <div className='logo'>
            <span>DA</span>
          </div>
          <h4 className="name">Dapo Agbede & C0.</h4>
          <p>Number of Lawyers : 6</p>
          <p>My Role : <span>Admin</span></p>
          <Link to='lawyer'><button>View Law Firm</button></Link>

        </div>
      </div>
      {/* <Lawyer /> */}
    </div>
  )
}

export default Firms



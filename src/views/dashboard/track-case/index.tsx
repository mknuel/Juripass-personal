import React, { useState } from 'react'
import SingleCase from './subs/single-case'


import './track-case.scss'

const TrackCase = () => {
  const id = "2354"
  const [value, setValue] = (useState(''))
  const [showCase, setShowCase] =(useState(false))
  return (
    <div>
          <div className='case-head'>
              <h3>
              Track a Case
          </h3>
          <p>Find and track your case without any difficulties using tracking ID</p>
          </div>
          <div className='option'>
              <button>Track a Case</button>
              <button style={{background: 'transparent', color: 'black'}}>Track a file</button>
          </div>
          <div className='file-id'>
              <input value= {value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Input case ID' style={{marginLeft: '20px'}}/>
        <button
        onClick={()=>setShowCase(true)}
        >
          Track case
        </button>
          </div>

          
          <div>
            { showCase && <SingleCase id={id} /> }
            </div>
    </div>
  )
}

export default TrackCase
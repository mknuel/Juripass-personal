import React from 'react'

import landingBg from '../../../src/assets/images/Mask group.png'
import call from '../../../src/assets/images/Group 2814.png'
import litigation from '../../../src/assets/images/Group 26869.png'

const hero = () => {
  return (
      <div>
          <div className='hero'>
          <img src={landingBg} alt="" />
          <div className='landing--caption'>
            <img className='liti' src={litigation} alt="" />
            <h3>File court process and pay filing fees online from the comfort of your office.</h3>
            <button>Join Juripass</button>
          </div>
          <div className='call'>
            <img className='calli' src={call} alt="" />
          </div>
        </div>
    </div>
  )
}

export default hero
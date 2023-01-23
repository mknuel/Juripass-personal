import React from 'react'

import abt from '../../../src/assets/images/Rectangle 5.png'
import trio from '../../../src/assets/images/trio.png'

const About = () => {
  return (
      <div className='abt'>
              <button>About Us</button>
            <img src={abt} alt="" />
          <p>We believe that justice delivery in Nigeria will be more effective and efficient if interfaced with technology.</p>
          <div className='trio'>
              <img src={trio} alt="" />
          </div>
    </div>
  )
}

export default About
import React from 'react'


import filing from '../../../src/assets/images/filing.png'
import service from '../../../src/assets/images/e-service.png'
import support from '../../../src/assets/images/support.png'
import report from '../../../src/assets/images/reporting.png'
import payment from '../../../src/assets/images/payment.png'
import sum from '../../../src/assets/images/case.png'
import storage from '../../../src/assets/images/storage.png'
import security from '../../../src/assets/images/security.png'


import eu from '../../../src/assets/icons/eu 2.png'
import bc from '../../../src/assets/icons/BC1 2.png'
import mf from '../../../src/assets/icons/mca2 3.png'
import lm from '../../../src/assets/icons/luminate1 3.png'
import os from '../../../src/assets/icons/osiwa 3.png'
// import { features } from '../../constants/features'


const Features = () => {
  return (
    <div className='features'>
      <div className='icons'>
        <div className='txt-p'>
          <p>Trusted by multiple law firms in Nigeria</p>
      </div>
        <div className='icns'>
        <img src={eu} alt="" />
        <img src={bc} alt="" />
        <img src={mf} alt="" />
        <img src={lm} alt="" />
        <img src={os} alt="" />
        </div>
      </div>
      <div className='ftrs'>
        <h1>Our Features</h1>
        <p>Redefining Litigation through Juripass</p>
      </div>
      <div className='ftrs-card'>
        <img src={filing} alt="" />
        <img src={service} alt="" />
        <img src={support} alt="" />
        <img src={report} alt="" />
        <img src={payment} alt="" />
        <img src={sum} alt="" />
        <img src={storage} alt="" />
        <img src={security} alt="" />
      </div>
    </div>
  )
}

export default Features
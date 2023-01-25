import React from 'react'

import rede1 from '../../../src/assets/images/redef1.png'
import rede2 from '../../../src/assets/images/redef2.png'
import rede3 from '../../../src/assets/images/redef3.png'
import just1 from '../../../src/assets/images/just1.png'
import just2 from '../../../src/assets/images/just2.png'

import './about.scss'

import hit from '../../../src/assets/images/Mask group (2).png'
const index = () => {
  return (
    <div className='main-about'>
        <div className='header-a'>
          <div className='first'>
            <img src={hit} />
            <div className='mid-text'>
                  <h3>About Juripass</h3>
                  <p>Rebranding and redefining Justice delivery in Africa with our cutting-edge technology that enables lawyers and litigants to file Court documents and pay filing fees online seamlessly from the comfort of their office in just 5 minutes.</p>
            </div>
        </div>
      </div>
      <div className='body-abt'>
        <div className='re-def'>
          <div className='txt-re'>
            <div className='heading'>
                  <p>Redefining Litigation</p>
            </div>
            <div className='explanation'>
              <p>Juripass is a legal tech startup that is rebranding and redefining litigation in Africa. We believe that filing Court process and payment of filing fees should be done seamlessly from the comfort of one’s office or home. In furtherance of our belief, we’ve developed cutting-edge state-of-the-art technology that enables lawyers and litigants to file court documents and pay filing fees online in less than five minutes</p>
            </div>
          </div>
          <div className='img-re'>
            <div className='first-r'>
              <img src={rede1} alt="" />
              <div className='second-r'>
                  <img src={rede2} alt="" />
              </div>
              <div className='third-r'>
                  <img src={rede3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='just-del'>
          <div className='img-just'>
            <div className='first-j'>
              <img src={rede1} alt="" />
              <div className='second-j'>
                <img src={just1} alt="" />
              </div>
              <div className='third-j'>
                  <img src={just2} alt="" />
              </div>
            </div>
          </div>
          <div className='txt-just'>
              <div className='heading'>
                  <p>Efficiency and effectiveness in Justice delivery</p>
              </div>
            <div className='explanation'>
              <p>We believe that justice delivery in Nigeria will be more effective and efficient if interfaced with technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
import React from 'react'

import rede1 from '../../../src/assets/images/redef1.png'
import rede2 from '../../../src/assets/images/redef2.png'
import rede3 from '../../../src/assets/images/redef3.png'
import just1 from '../../../src/assets/images/just1.png'
import just2 from '../../../src/assets/images/just2.png'

import './about.scss'

import { innovation } from '../../constants/Innovation'

import { team } from '../../constants/Team'
const About = () => {
  return (
    <div className='main-about'>
        <div className='header-a'>
          <div className='first'>
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
        <div className='innovation'>
        <div className='heading-in'>
          <h4>Juripass Innovation</h4>
          <p>The right solution to your legal concerns</p>
        </div>
        <div className='flex-inv'>
        {innovation.map((innovation, index) => (
          <div className='flex-card'>
              <div className='in-img'>
                  <img src={innovation.icon} alt="" />
              </div>
              <div style={{width: index !== 2 ? '150px' : ""}} className='in-title'>
                <h4>{ innovation.title }</h4>
              </div>
              <div className='in-desc'>
                <p>{ innovation.description }</p>
              </div>
            </div>
        ))}
        </div>
      </div>
      <div className='team'>
        <div className='head-team'>
          <h4>Our Team</h4>
          <p>The right solution to your legal concerns</p>
        </div>
        <div className='team-flex'>
          {team.map((team) => (
          <div className='team-profile'>
            <div className='team-image'>
              <img src={team.photo} alt="" />
            <div className='team-name'>
                <p>{ team.name }</p>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
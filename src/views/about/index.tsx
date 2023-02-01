import React from 'react'
import { People, FolderCloud, Shield } from 'iconsax-react'
import { IMAGE } from '../../assets/images/images'
import Page from '../../components/page'
import './index.scss'

const About = () => {
  return (
    <Page title='Juripass | About'>
      <div id='about'>
        <section id='hero'>
          <div className='hero con'>
            <h1>About Juripass</h1>
            <p>Rebranding and redefining Justice delivery in Africa with our cutting-edge technology that enables lawyers and litigants to file Court documents and pay filing fees online seamlessly from the comfort of their office in just 5 minutes.</p>
          </div>
        </section>
        <section id='purpose'>
          <div className=' purpose con'>
            <div className='purpose-item'>
              <div className='purpose-item_text'>
                <b>Redefining Litigation</b>
                <p>Juripass is a legal tech startup that is rebranding and redefining litigation in Africa. We believe that filing Court process and payment of filing fees should be done seamlessly from the comfort of one’s office or home. In furtherance of our belief, we’ve developed cutting-edge state-of-the-art technology that enables lawyers and litigants to file court documents and pay filing fees online in less than five minutes</p>
              </div>
              <div className='purpose-item_img'>
                <img src={IMAGE.Redefine} alt='redefine' />
              </div>
            </div>
            <div className='purpose-item'>
              <div className='purpose-item_img'>
                <img src={IMAGE.Efficiency} alt='redefine' />
              </div>
              <div className='purpose-item_text'>
                <b>Efficiency and effectiveness in Justice delivery</b>
                <p>We believe that justice delivery in Nigeria will be more effective and efficient if interfaced with technology.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='innovation'>
          <div className='innovation con'>
            <div className='heading'>
              <h2 className='heading-main'>Juripass Innovation</h2>
              <p className='heading-sub'>The right solution to your legal concerns</p>
            </div>
            <div className='innovation-body'>
              <div className='innovation-body_item'>
                <People size="44" color="#FFFFFF" variant="Bold" />
                <b>Crafted with <br /> users in mind</b>
                <p>Juripass was crafted with users in Mind. It is designed in such a way that even the most inexperienced computer users will find it simple to use.</p>
              </div>
              <div className='innovation-body_item'>
                <FolderCloud size="44" color="#FFFFFF" variant="Bold" />
                <b>Speedy<br />filing of Court process</b>
                <p>At Juripass, we believe that speedy and efficient delivery of justice starts with Fast-tracking the existing workflow in the filing of Courts process through technology.</p>
              </div>
              <div className='innovation-body_item'>
                <Shield size="44" color="#ffffff" variant="Bold" />
                <b>Paving way for the in flux of <br /> technology in the Judiciary</b>
                <p>We are optimistic that Juripass' innovation in the Nigeria Legal Industry will pave the way for the influx of technology in the Nigerian Judiciary and Africa at large.</p>
              </div>
            </div>
          </div>
        </section>

        <section id='team'>
          <div className='team con'>
            <div className='heading'>
              <h2 className='heading-main'>Our Team</h2>
              <p className='heading-sub'>The right solution to your legal concerns</p>
            </div>
            <div className='team-body'>
              <div className='team-body_item'>
                <img src={IMAGE.Team1} alt="Picture of Maxwell M. Igweogu Esq." />
                <h4>Maxwell M. Igweogu<br/> Esq.</h4>
              </div>
              <div className='team-body_item'>
                <img src={IMAGE.Team2} alt="Picture of Dr. Hon. Jibayo Adeyeye Esq." />
                <h4>Dr. Hon. Jibayo Adeyeye<br/> Esq.</h4>
              </div>
              <div className='team-body_item'>
                <img src={IMAGE.Team3} alt="Picture of Ajibayo Adeyeye Olugbenga PhD" />
                <h4>Ajibayo Adeyeye <br/>Olugbenga PhD</h4>
              </div>
              <div className='team-body_item'>
                <img src={IMAGE.Team4} alt="Pictiure of Mr Oluwasegun Kolawole" />
                <h4>Mr Oluwasegun<br/> Kolawole</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}

export default About
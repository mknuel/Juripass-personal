import React from 'react'
import { EmailIcon, PlayIcon } from '../../assets/icons';
import { LOGO } from '../../assets/logos/logo';
import { BtnPrimary, } from '../../components/button'
import Page from '../../components/page'
import './index.scss';

function Landing() {
  return (
    <Page title='Juripass | Home'>
      <div className='landing'>
        {/* hero section */}
        <section id='hero'>
          <div className='con'>
            <div className='hero-text'>
              <h1>The Future <br /> of <span className='highlight'>Litigation</span></h1>
              <p>File Court process and pay filing fees online from the comfort of your office.</p>
              <BtnPrimary>Join Juripass</BtnPrimary>
            </div>
            <div className='hero-contact'>
              <PlayIcon />
              <hr />
              <div>
                <p>Need a consultant? Call us on</p>
                <h2>0813-020-1234</h2>
              </div>
            </div>
          </div>
        </section>

        {/* users section */}
        <section id='users'>
          <div className='con'>
            <h4>Trusted by multiple Law firms in <br />Nigeria</h4>
            <div>
              <img src={LOGO.EU} alt='european union' />
              <img src={LOGO.BC} alt='british council' />
              <img src={LOGO.MCA} alt='MacArthur Foundation' />
              <img src={LOGO.Luminate} alt='luminate' />
              <img src={LOGO.Osiwa} alt='osiwa' />
            </div>
          </div>
        </section>

        {/* features section  */}
        <section id='features'>
          <div className='con'>
            <div className='features-heading'>
              <h3 className='features-heading_main heading'>Our Features</h3>
              <p className='features-heading_sub heading-sub'>Redefining Litigation through Juripass</p>
            </div>
            <div className='features-body'>
              <div className='features-body_item'>
                <div>
                  <EmailIcon />
                </div>
                <p>Simply Create an account or log in to file your process in less than 5 minutes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}

export default Landing
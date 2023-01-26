import React from 'react'
import { EmailIcon, FolderIcon, PlayIcon, ReportIcon, SecureWindowIcon, SecurityIcon, SummaryIcon, SupportIcon, WindowIcon } from '../../assets/icons';
import { LOGO } from '../../assets/logos/logo';
import { IMAGE } from '../../assets/images/images';
import { BtnPrimary, } from '../../components/button'
import Carousel from '../../components/carousel';
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
                  <WindowIcon />
                </div>
                <b>E-filling Portal</b>
                <p>Simply Create an account or log in to file your process in less than 5 minutes.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <EmailIcon />
                </div>
                <b>E-Service</b>
                <p>After filing, you may electronically serve other interested parties through email.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <SupportIcon />
                </div>
                <b>24/7 Support</b>
                <p>Dedicated Staffs are always available to help you at every step of the process.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <ReportIcon />
                </div>
                <b>Real-time Reporting</b>
                <p>Receive real-time reports concerning the status of your filed document and service report.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <SecurityIcon />
                </div>
                <b>Secured Payment Gateway</b>
                <p>Juripass allows you to easily and securely pay your filing fees only.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <SummaryIcon />
                </div>
                <b>Case Summary</b>
                <p>Easily view details and records of a case, the judge assigned to your case, and a log of all electronic filing activities.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <FolderIcon />
                </div>
                <b>Remote Storage</b>
                <p>Your filed cases are remotely stored on the cloud. You can access them anytime anywhere.</p>
              </div>
              <div className='features-body_item'>
                <div>
                  <SecureWindowIcon />
                </div>
                <b>Security and much more</b>
                <p>Our cutting-edge technologies were crafted with your data privacy and security concern in mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* about section  */}
        <section id='about'>
          <div className='con'>
            <div className='about-text'>
              <p>We believe that justice delivery in Nigeria will be more effective and efficient if interfaced with technology.</p>
              <BtnPrimary>About Us</BtnPrimary>
            </div>
            <div className='about-img'>
              <img src={IMAGE.Lawyers} alt='lawyer pic' />
            </div>
          </div>
        </section>

        {/* comments section */}
        <section id='comments'>
          <div className='con'>
            <div className='comments-heading'>
              <h3 className='comments-heading_main heading'>Attestation</h3>
              <p className='comments-heading_sub heading-sub'>These are what leading figures in the Legal Industry have to say about Juripass's cutting-edge solution.</p>
            </div>
            <div className='comments-body'>
              <Carousel testimonials={[]} />
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}

export default Landing
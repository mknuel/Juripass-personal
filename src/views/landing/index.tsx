import React from 'react'
import { EmailIcon, FolderIcon, PlayIcon, ReportIcon, SecureWindowIcon, SecurityIcon, SummaryIcon, SupportIcon, WindowIcon } from '../../assets/icons';
import { LOGO } from '../../assets/logos/logo';
import { IMAGE } from '../../assets/images/images';
import { BtnPrimary, } from '../../components/button'
import Carousel from './carousel';
import Page from '../../components/page'
import './index.scss';
import { useNavigate } from 'react-router';


function Landing() {
  const navigate = useNavigate()
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
              <BtnPrimary onClick={() => navigate('/about')}>About Us</BtnPrimary>
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

        {/* frequently asked questions section */}
        <section id='questions'>
          <div className='con'>
            <div className='questions-heading'>
              <h3 className='questions-heading_main heading'>Frequently Asked Questions</h3>
              <p className='questions-heading_sub heading-sub'>Everything you need to know about redefining litigation through Juripass. <br />Can’t find the answer you are looking for, kindly send us a mail.</p>
            </div>
            <div className='questions-body'>
              <div className='questions-body-item'>
                <h4 className='questions-body-item_heading'>Does Juripass Provide for Electronic Service to Opposing Counsel or Other Parties?</h4>
                <p className='questions-body-item_text'>Yes. With Juripass, you can easily serve opposing Counsel electronically through email and in-portal notification. However, the said opposing counsel must be a Juripass User to be able to receive access cases served electronically. Note also that initiating processes must be served personally as required by most Rules of High Court.</p>
              </div>
              <div className='questions-body-item'>
                <h4 className='questions-body-item_heading'>What States Does Juripass Offer its e-filing Service in?</h4>
                <p className='questions-body-item_text'>At the moment, Juripass is being implemented in the Ondo State Judiciary. We are working assiduously to spread our reach in other states. Very soon users will be able to file cases across other jurisdictions.</p>
              </div>
              <div className='questions-body-item'>
                <h4 className='questions-body-item_heading'>How Much Does it Cost to Use Juripass?</h4>
                <p className='questions-body-item_text'>It costs absolutely nothing to register and start using Juripass. However, there will be the typical court filing fees mandated by each state's court fee schedule and service a cost effective service charge. This only applies when you initiate a case or file on existing case.</p>
              </div>
              <div className='questions-body-item'>
                <h4 className='questions-body-item_heading'>Can Non Lawyers Use Juripasss?</h4>
                <p className='questions-body-item_text'>No. Juripass is designed for Lawyers. For a Lawyer to start filing on Juripass, the said Lawyer must be verified. To be verified, Juripass will require your Call to Bar Certificate and/or Qualifying Certificate. This is to safeguard against unauthorized practice of Law. It takes an average of 15-20 minutes to get verified on Juripass. Please refer to our Privacy Policy and Terms of Use to learn how we handle your Documents.</p>
              </div>
              <div className='questions-body-item'>
                <h4 className='questions-body-item_heading'>How Do I Get Verified as a Lawyer?</h4>
                <p className='questions-body-item_text'>To be verified, Juripass will require your Call to Bar Certificate and/or Qualifying Certificate. This is to safeguard against unauthorized practice of Law. It takes an average of 15-20 minutes to get verified on Juripass. Please refer to our Privacy Policy and Terms of Use to learn how we handle your submitted Documents.</p>
              </div>
              <div className='questions-body-item'>
                <h4 className='questions-body-item_heading'>How Long Does it Take to File a Case?</h4>
                <p className='questions-body-item_text'>Once you have created an account on Juripass, it takes less than 5 minutes to submit a case. After submission, the Court registrar will swiftly approve your case or refer back to you for further action if need be.</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}

export default Landing
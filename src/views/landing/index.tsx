import React from 'react'
import { BtnTertiary } from '../../components/button'
import Page from '../../components/page'
import './index.scss';

function Landing() {
  return (
    <Page title='Juripass | Home'>
      <div className='con'>
          <section id='hero'>
            <div className='hero-text'>
                <h1>The Future of Litigation</h1>
                <p>File Court process and pay filing fees online from the comfort of your office.</p>
                <BtnTertiary>Join Juripass</BtnTertiary>
            </div>
          </section>
      </div>
    </Page>
  )
}

export default Landing
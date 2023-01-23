import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Page from '../../components/page'
import Hero from '../../views/landing/hero'
import Features from '../../views/landing/features'


import './landing.scss'
import About from './about'

function Landing() {
  return (
    <Page title='Juripass | Home'>
      <div className='landing'>
        <Hero />
        <Features />
        <About />
      </div>
    </Page>
  )
}

export default Landing
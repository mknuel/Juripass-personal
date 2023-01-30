import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'
import './index.scss'

function Layout() {
  return (
    <div id='layout'>
      <div id='layout-header'>
        <Header />
      </div>
      <div id='layout-body'>
        <Outlet />
      </div>
      <div id='layout-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
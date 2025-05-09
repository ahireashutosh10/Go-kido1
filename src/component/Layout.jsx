import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Background from './Background'

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <Background /> */}
      <Outlet/>

      <Footer/>
    </div>
  )
}

export default Layout

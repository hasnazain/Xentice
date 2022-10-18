import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Middlebar from '../../component/Middlebar/Middlebar'
import Advertise from '../../component/Advertising-bar/Advertise'
import Imagegallery from '../../component/Image Block/Imagegallery'
import Footer from '../../component/footer/Footer'


export default function Homepage() {
  return (
    <>
    <Navbar/>
    <Middlebar/>
    <Advertise/>
    <Imagegallery/>
    <Footer/>
    </>
  )
}

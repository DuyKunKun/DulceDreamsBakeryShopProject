import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-contnt-left">
          <img src={assets.logo} alt="" className='footerlogo' />
          <p>day la mo ta o phan cuoi </p>
          <div className="footer-social-icons">

            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />

          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0333414124-0912370460</li>
            <li>contact@dulcedreams.com</li>
            <li>Blog</li>
            <li>Social Media</li>
            <li>Youtube</li>
          </ul>
        </div>

      </div>
      <hr /> <p className='footer-copyright'>Copyright 2024 DulceDreams - All Right Reserved</p>
    </div>
  )
}

export default Footer

import React from 'react'
import "./Footer.css";
import { CgLogIn } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footerCotainer'>

<div className='privacyFooter'>
<h1>PRIVACY</h1>
<p>Term of use</p>
<p>Cookies</p>
<p>Privacy Policy </p>
</div> 
<div className='serviceFooter'>
<h1>SERVICES</h1>
<p>Customer Service</p>
<p>Service Pledge</p>
<p>Standards </p>
</div>   
<div className='aboutFooter'>
<h1>ABOUT US</h1>
<p>Our Story</p>
<p>Meet Our Team</p>
<p>Vision & Values </p>
</div>
<div className='informationFooter'>
<h1>INFORMATION</h1>
<p>Locations</p>
<p>FAQs</p>
<p>Contact </p>
</div><div className='socialFooter'>
<h1>SOCIAL MEDIA</h1>
<div className='btncontiner'>
<button><FaTwitter/></button>            
<button><FaFacebook/></button>            
<button><FaInstagram/></button>            
<button><FaLinkedinIn/></button>            
</div>
</div>  
    </div>
  )
}

export default Footer

import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';
import { Newsletter } from '../../components';
const Footer = () => (
  <div className='app__footer app__bg section__padding'>
    <Newsletter />

    <div className="app__footer-container flex__center">
      <div className="app__footer-container_contact">
        <h2>Contact Us</h2>
        <p className='p__opensans' style={{marginBottom: "1rem"}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230<br/>
        +1 212-555-1230</p>
      </div>

      <div className="app__footer-container-links">
        <img src={images.gericht} alt="footer logo" />
        <p style={{color: "#AAA", marginTop: "2rem"}}>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon"  style={{margin: "1rem 0"}}/>
        <div className="app__footer-container_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-container-work">
        <h2>Working Hours</h2>
        <p style={{margin: "1rem 0"}}>Monday-Friday: <br/> 08:00 am -12:00 am</p>
        <p>Saturday-Sunday: <br/>07:00am -11:00 pm</p>
      </div>
    </div>

    <p style={{marginTop: '4rem', color: '#AAA'}}>2021 Gerícht. All Rights reserved.</p>
  </div>
);

export default Footer;

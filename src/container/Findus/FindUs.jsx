import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h2 className='headtext__cormorant'>Find Us</h2>
      <p className='p__opensans' style={{color: "#AAA"}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Open Hours</p>
      <p className="p__opensans"  style={{color: "#AAA"}}>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans"  style={{color: "#AAA"}}>Sat - Sun: 10:00 am - 03:00 am</p>
      <button className='custom__button' style={{margin: '2rem 0' }}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;

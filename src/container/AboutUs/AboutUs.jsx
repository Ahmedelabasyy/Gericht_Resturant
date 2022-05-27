import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg section__padding flex__center' id="about">
    <div className="app__aboutus-overlay ">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h2 className='headtext__cormorant'>About Us</h2>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife img" />
      </div>

      <div className="app__aboutus-content_history">
        <h2 className='headtext__cormorant'>Our History</h2>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button">Know More</button>
      </div>
      
    </div>
  </div>
);

export default AboutUs;

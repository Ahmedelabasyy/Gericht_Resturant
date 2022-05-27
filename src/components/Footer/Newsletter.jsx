import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__news flex__center'>
    <div className="app__news-heading">
      <SubHeading title="Newsletter" />
      <h2 className='headtext__cormorant app__news-heading'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans' style={{fontSize: 12, color: "#AAA", marginTop: "2rem"}}>And never miss latest Updates!</p>
    </div>
    <div className="app__news-input flex__center">
      <input type="email" placeholder="Enter your e-mail"/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;

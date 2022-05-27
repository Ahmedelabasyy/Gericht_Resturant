import React from 'react';
import { SubHeading } from '../../components';

import { images, data } from '../../constants';
import './Laurels.css';


const AwardCard = ({award}) => (
  <div className='app__award'>
    <div className="app__award_img">
      <img src={award.imgUrl} alt="awards" />
    </div>
    <div className="app__award_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{award.title}</p>
      <p className="p__opensans" style={{color: "#AAA", fontSize: 15 }}>{award.subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id="awards">
    <div className="app__wrapper_info">
    <SubHeading title="Awards & recognition" />
    <h2 className='headtext__cormorant'>Our Laurels</h2>
    <div className="app__laurels">
      {data.awards.map((award) => (
        <AwardCard award={award} key={award.title}/>
      ))}
    </div>
    </div>

    <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;

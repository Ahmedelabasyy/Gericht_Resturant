import React from 'react';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [ images.gallery02, images.gallery03,  images.gallery04, images.gallery01];
const Gallery = () => {
  
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery section__padding flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans' style={{color: "#AAA", margin: '1rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((img, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery-${index + 1}`} >
              <img src={img} alt="gallery"/>
              <BsInstagram className="gallery__image-icon"/>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
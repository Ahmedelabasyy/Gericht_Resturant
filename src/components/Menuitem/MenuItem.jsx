import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <div className="app__menuitem_head">
      <div className="app__menuitem_head-name">
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className='app__menuitem_head-dash' />

      <div className="app__menuitem_head-price">
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>
    <div className="app__menuitem_sub">
      <p className='p__cormorant' style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;

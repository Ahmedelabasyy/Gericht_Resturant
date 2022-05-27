import React from 'react';

import { MenuItem, SubHeading } from '../../components';
import {images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding flex__center' id="menu">
    <div className="app__specialMenu-heading">
      <SubHeading title="Menu that fits you palatte" />
      <h2 className='headtext__cormorant'>Today’s Special</h2>
    </div>

    <div className="app__specialMenu_menu flex__center">
      <div className="app__specialMenu_menu_coldDrinks flex__center">
        <p className='app__specialMenu_menu_heading'>Drinks & Water</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      
      <div className="app__specialMenu_menu_cocktails flex__center">
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

    <button type="button" className='custom__button' style={{marginTop: '2rem', marginLeft: '3rem', fontWeight: 600}}>View More</button>
  </div>
);

export default SpecialMenu;

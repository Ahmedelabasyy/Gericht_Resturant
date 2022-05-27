import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-burgermenu">
        <GiHamburgerMenu className='hamburger__icon' color="fff" fontSize={27} onClick={() => setToggleBurgerMenu(true)} />
        {toggleBurgerMenu && (
          <div className="app__navbar-burgermenu_overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => setToggleBurgerMenu(false)} />
            <ul className="app__navbar-burgermenu_overlay-links">
              <li className="p__opensans"><a href="#home" onClick={() => setToggleBurgerMenu(false)}>Home</a></li>
              <li className="p__opensans"><a href="#about" onClick={() => setToggleBurgerMenu(false)}>About</a></li>
              <li className="p__opensans"><a href="#menu" onClick={() => setToggleBurgerMenu(false)}>Menu</a></li>
              <li className="p__opensans"><a href="#awards" onClick={() => setToggleBurgerMenu(false)}>Awards</a></li>
              <li className="p__opensans"><a href="#contact" onClick={() => setToggleBurgerMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )

};

export default Navbar;

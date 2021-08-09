import React, { useState } from 'react';
// import icon from '../imgs/DMSIcon.png';
import './style/Header.css';
import Menu from './Menu';
import MenuControler from './MenuControler';

function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState('close-menu');

  const changeMenu = () => {
    if (isChecked) {
      setIsChecked(false);
      setIsOpen('close-menu');
    } else {
      setIsChecked(true);
      setIsOpen('open-menu');
    }
  };

  return (
    <header>
      <h1 className="textLogo">DMS</h1>
      <Menu isOpen={isOpen} />
      <MenuControler changeMenu={changeMenu} isChecked={isChecked} />
    </header>
  );
}

export default Header;

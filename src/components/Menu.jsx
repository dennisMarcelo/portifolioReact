import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/Menu.css';
import facebook from '../imgs/facebook quadrado 256.png';
import instagram from '../imgs/instagram quadrado 256.png';
import linkedin from '../imgs/linkedin quadrado 256px.png';

function Menu({ isOpen }) {
  const { pathname } = useLocation();

  return (
    <nav className={`menu-options ${isOpen}`}>
      <NavLink
        className={pathname === '/' ? 'activated' : ''}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={pathname === '/projects' ? 'activated' : ''}
        to="/projects"
      >
        Projetos
      </NavLink>

      {/* <NavLink
        className={pathname === '/hardskills' ? 'activated' : ''}
        to="/hardskills"
      >
        Hard Skills
      </NavLink> */}

      <NavLink
        className={pathname === '/contact' ? 'activated' : ''}
        to="/contact"
      >
        Contato
      </NavLink>

      <span className="social-network-links">
        <a
          href="https://www.facebook.com/dennis.marcelo.77/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon" src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/dennis-marcelo/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon" src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/dms.im410/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon" src={instagram} alt="instagram" />
        </a>
      </span>
    </nav>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.string.isRequired,
};

export default Menu;

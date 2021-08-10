import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/Menu.css';
import facebook from '../imgs/facebook quadrado 256.png';
import instagram from '../imgs/instagram quadrado 256.png';
import linkedin from '../imgs/linkedin quadrado 256px.png';

function Menu({ isOpen }) {
  return (
    <nav className={`menu-options ${isOpen}`}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/hardskills">Hard Skills</Link>
      <Link to="/contact">Contato</Link>
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

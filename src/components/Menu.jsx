import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/Menu.css';

function Menu({ isOpen }) {
  return (
    <nav className={`menu-options ${isOpen}`}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/hardskills">Hard Skills</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.string.isRequired,
};

export default Menu;

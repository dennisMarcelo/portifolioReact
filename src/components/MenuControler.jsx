import React from 'react';
import PropTypes from 'prop-types';
import './style/MenuControler.css';

function MenuControler({ changeMenu, isChecked }) {
  return (
    <div className="menu-controler">
      <label htmlFor="menu-hamburguer">
        <input
          id="menu-hamburguer"
          type="checkbox"
          onChange={changeMenu}
          checked={isChecked}
        />

        <span className="hamburguer" />
      </label>
    </div>
  );
}

MenuControler.propTypes = {
  changeMenu: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default MenuControler;

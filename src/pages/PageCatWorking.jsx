import React from 'react';
import catWorking from '../imgs/catworking.gif';
import './style/PageCatWorking.css';

function PageCatWorking() {
  return (
    <div className="working">
      <h1>Nossos estagiários já estão trabalhando nisso.</h1>
      <img src={catWorking} alt="cat working in computer" />
    </div>
  );
}

export default PageCatWorking;

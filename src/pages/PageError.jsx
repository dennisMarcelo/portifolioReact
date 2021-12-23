import React from 'react';
import { useParams } from 'react-router-dom';
import gifErro from '../imgs/gifErro.gif';
import './style/PageError.css';

function PageError() {
  const { message } = useParams();
  return (
    <div className="PageError">
      <h1>{`Error: ${message}`}</h1>
      <img src={gifErro} alt="imageError" />
    </div>
  );
}

export default PageError;

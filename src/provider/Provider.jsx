import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import data from '../data/data';
import Context from './Context';

export default function Provider({ children }) {
  const [dataUser, setDataUser] = useState({});

  // aqui futuramente os dados vão vir da API:
  useEffect(() => {
    setDataUser(data);
  }, []);

  const context = {
    dataUser,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

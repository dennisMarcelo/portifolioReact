import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import data from '../data/data';
import Context from './Context';
import formatDataForChart from '../helpers/formatDataForChart';

export default function Provider({ children }) {
  const [dataUser, setDataUser] = useState({});

  // aqui futuramente os dados vão vir da API:
  useEffect(() => {
    setDataUser({
      home: data().home,
      projects: data().projects,
      hardSkills: formatDataForChart(data().hardSkills),
    });
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

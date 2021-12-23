import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useHistory } from 'react-router-dom';
import formatDataForChart from '../helpers/formatDataForChart';
import Loding from './Loding';
import './style/HardSkills.css';

function HardSkills() {
  // const { dataUser: { hardSkills } } = useContext(Context);
  const [hardSkills, setHardSkills] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const url = 'https://portifolio-dms-backend.herokuapp.com/hardSkills';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHardSkills(formatDataForChart(data)))
      .catch(({ message }) => history.push(`/error/${message}`));
  }, []);

  const chartGraphic = () => (
    hardSkills.map(({ data, options }) => (
      <div className="skills" key={options.plugins.title.text}>
        <Bar data={data} options={options} />
      </div>
    ))
  );

  return (
    <div className="HardSkills">
      {hardSkills === undefined ? <Loding /> : (
        <>
          <h1 className="hardSkills-title">Tecnologias que eu mais utilizo</h1>
          <div className="hardSkills-group">{chartGraphic() }</div>
        </>
      )}

    </div>
  );
}

export default HardSkills;

// criar graficoss
// https://www.youtube.com/watch?v=l0K95at8BVg

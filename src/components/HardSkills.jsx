/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import Context from '../provider/Context';
import './style/HardSkills.css';

function HardSkills() {
  const { dataUser: { hardSkills } } = useContext(Context);

  const chartGraphic = () => (
    hardSkills.map(({ data, options }) => (
      <div className="skills" key={options.plugins.title.text}>
        <Bar data={data} options={options} />
      </div>
    ))
  );

  return (
    <div className="HardSkills">
      <h1 className="hardSkills-title">Tecnologias que eu mais utilizo</h1>

      <div className="hardSkills-group">
        {hardSkills !== undefined ? chartGraphic() : ''}
      </div>

    </div>
  );
}

export default HardSkills;

// criar graficoss
// https://www.youtube.com/watch?v=l0K95at8BVg

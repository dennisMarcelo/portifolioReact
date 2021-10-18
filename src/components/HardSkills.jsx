/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import Context from '../provider/Context';
import './style/HardSkills.css';

function HardSkills() {
  const { dataUser: { hardSkills } } = useContext(Context);

  const Li = (arraySkills) => (
    <>
      {arraySkills.map((ele) => <li key={ele}>{ele}</li>)}
    </>
  );

  return (
    <main className="HardSkills">
      <h1 className="hardSkills-title">Tecnologias mais utilizadas</h1>
      <div className="skills">
        <ul className="front-end">
          <h4>Front End</h4>
          {hardSkills !== undefined ? Li(hardSkills.frontEnd) : ''}
        </ul>

        <ul className="back-end">
          <h4>Back End</h4>
          {hardSkills !== undefined ? Li(hardSkills.backEnd) : ''}
        </ul>

        <ul className="test">
          <h4>Tests</h4>
          {hardSkills !== undefined ? Li(hardSkills.test) : ''}
        </ul>
      </div>
    </main>
  );
}

export default HardSkills;

// criar graficoss
// https://www.youtube.com/watch?v=l0K95at8BVg

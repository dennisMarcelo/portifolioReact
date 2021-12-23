import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style/Home.css';
import HardSkills from '../components/HardSkills';
import Loding from '../components/Loding';

function Home() {
  const [home, setHome] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const url = 'https://portifolio-dms-backend.herokuapp.com/home/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHome(data))
      .catch(({ message }) => history.push(`/error/${message}`));
  }, []);
  // lembresse de tratar erros

  const profile = () => (
    <div className="profile">
      <img className="image-profile" src={home.imgURL} alt="dennis" />
      <h3>{home.name}</h3>
      <span>{home.specialty}</span>
    </div>
  );

  const resume = () => (
    <div className="about">
      <h1>Sobre mim</h1>
      <ul>
        {home.resume.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <main>
      <div className="Home">
        {home === undefined ? <Loding /> : (
          <>
            {profile()}
            {resume()}
          </>
        )}
      </div>
      <HardSkills />
    </main>
  );
}

export default Home;

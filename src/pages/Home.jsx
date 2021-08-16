import React, { useContext } from 'react';
import './style/Home.css';
import Context from '../provider/Context';

function Home() {
  const { dataUser: { home } } = useContext(Context);

  const profile = () => (
    <>
      <img className="image-profile" src={home.imgURL} alt="dennis" />
      <h3>{home.name}</h3>
      <span>{home.specialty}</span>
    </>
  );

  const resume = () => (
    <>
      {home.resume.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </>
  );

  return (
    <main className="Home">
      <div className="profile">
        {home !== undefined ? profile() : ''}
      </div>
      <div className="about">
        <h1>Sobre mim</h1>
        <ul>
          {home !== undefined ? resume() : ''}
        </ul>
      </div>
    </main>
  );
}

export default Home;

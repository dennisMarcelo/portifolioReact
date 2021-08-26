import React, { useContext } from 'react';
import Context from '../provider/Context';
import './style/Projects.css';

function Projects() {
  const { dataUser: { projects } } = useContext(Context);

  const cards = () => (
    <>
      {projects.map(({
        title, linkImg, description, dateConclusion, linkApp,
      }) => (
        <div className="card" key={title}>
          <img src={linkImg} alt={`Projeto ${title}`} />
          <div className="card-info">
            <h1>{title}</h1>
            <p>{description}</p>
            <span>{`Finalizado: ${dateConclusion}`}</span>
            <a className="button-visit" href={linkApp} target="_blank" rel="noreferrer">visitar</a>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <main className="Projects">
      <h1>Projetos</h1>
      <div className="project-cards">
        {projects !== undefined ? cards() : ''}
      </div>
    </main>
  );
}

export default Projects;

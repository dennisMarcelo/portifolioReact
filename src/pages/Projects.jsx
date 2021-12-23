import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loding from '../components/Loding';
import './style/Projects.css';

function Projects() {
  const [projects, setProjects] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const url = 'https://portifolio-dms-backend.herokuapp.com/projects';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch(({ message }) => history.push(`/error/${message}`));
  }, []);

  const formartTitle = (string) => {
    let title = string;
    if (title.length >= 85) {
      title = title.slice(0, 85);
      title += '...';
    }

    return title;
  };

  const formartDescription = (string) => {
    let description = string;
    if (description.length >= 239) {
      description = description.slice(0, 239);
      description += '...';
    }
    return description;
  };

  const cards = () => (
    <>
      {projects.map(({
        title, linkImg, description, date, linkApp, status,
      }) => (
        <div className="card" key={title}>
          <img src={linkImg} alt={`Projeto ${title}`} />
          <div className="card-info">
            <h1>{formartTitle(title)}</h1>
            <p>{formartDescription(description)}</p>
            <div className="visit">
              <span className="project-status">{`${status}: ${date}`}</span>
              <a className="button" href={linkApp} target="_blank" rel="noreferrer">Visitar</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <main className="Projects">
      <h1>Projetos</h1>
      <div className="project-cards">
        {projects !== undefined ? cards() : <Loding />}
      </div>
    </main>
  );
}

export default Projects;

import React from 'react';
import './projects.sass';

const projects = [{
  id: 0,
  name: 'dashboard',
  link: 'https://lunavazquez.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/login.html',
  repositorio: 'https://github.com/lunavazquez/cdmx-2018-06-bc-core-am-data-dashboard'
}, {
  id: 1,
  name: 'movies',
  link: 'https://lunavazquez.github.io/cdmx-api-movies/src/login.html',
  repositorio: 'https://github.com/lunavazquez/cdmx-api-movies'
}, {
  id: 2,
  name: 'cipher',
  link: 'https://lunavazquez.github.io/cesar-cipher/src/',
  repositorio: 'https://github.com/lunavazquez/cesar-cipher'
}];

export default () => {
  return (
    <div className="section projects">
      <h1 className="section-title">Proyectos</h1>
      <div className="project-container">
        {projects.map(({ id, link, name }) => (
            <a key={id} href={link} className={name + ' project'}>{name}</a>
        ))}
        {projects.map(({repositorio, name}) => (
          <a key={repositorio} className="git-repo" href={repositorio}>@github/{name}</a>
        ))}
      </div>
    </div>
  );
}

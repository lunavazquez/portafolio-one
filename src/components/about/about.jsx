import React from 'react';
import './about.sass';
import photo from './mextli.jpg';

export default () => {
  return (
    <div id="about" className="section about">
      <div className="img-container">
        <img src={photo} alt="" />
      </div>
      <div className="bio-container">
        <h1 className="section-title">¿Quién soy?</h1>
        <p>Front end Developer, apasionada de la tecnología,
        me encanta crear cosas nuevas y colaborar en
        nuevos proyectos de programación.
        Autodidacta y abierta al nuevo conocimiento,
        me gusta tener retos en mi vida para
        mantenerme actualizada.</p>
      </div>
    </div>
  );
}

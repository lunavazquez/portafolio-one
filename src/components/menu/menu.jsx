import React from 'react';
import './menu.sass';

export default ({ open, click }) => {
  let classes = open ? 'menu active' : 'menu';
  return (
    <nav className={classes}>
      <ul>
        <li onClick={() => click(0)}>INICIO</li>
        <li onClick={() => click(1)}>ACERCA DE MI</li>
        <li onClick={() => click(2)}>HABILIDADES</li>
        <li onClick={() => click(3)}>PROYECTOS</li>
      </ul>
    </nav>
  );
}

import React from 'react';
import './bullets.sass';

export default ({ currentPage, click }) => {
  let bullets = [0, 1, 2, 3].map(index => {
    let classes = 'bullet';
    if (currentPage === index) {
      classes = 'bullet active';
    }
    return <span key={index} className={classes} onClick={() => click(index)}></span>;
  });

  return <div className="bullets">{bullets}</div>;
}

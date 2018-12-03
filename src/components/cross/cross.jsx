import React from 'react';
import './cross.sass';

export default ({ menuOpen, click }) => {
  let classes = menuOpen ? 'cross active' : 'cross';
  return (
    <div className={classes} onClick={click}>
      <span className="cross-line one"></span>
      <span className="cross-line two"></span>
      <span className="cross-line three"></span>
    </div>
  );
}

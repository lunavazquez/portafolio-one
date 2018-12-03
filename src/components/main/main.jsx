import React from 'react';
import './main.sass';

export default () => {
  return (
    <div id="main" className="section main">
      <div className="main-container">
        <p className="name">Mextli Vazquez</p>
        <p className="job-title">Front End Developer</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/lunavazquez">
              <span className="fab fa-github"></span>
              <span>@lunavazquez</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mextlivazquez/">
              <span className="fab fa-linkedin"></span>
              <span>@mextlivazquez</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/luna_vazq">
              <span className="fab fa-twitter"></span>
              <span>@luna_vazq</span>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=1H5pKNVbrQJGpM7hgjGNk_mi6P-Egg0be">
              <span className="far fa-file-pdf"></span>
              <span>CV</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

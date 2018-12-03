import React from 'react';
import './skills.sass';

const skillsData = [{
  id: 0,
  icon: "fab fa-html5",
  name: "HTML",
  percentage: "80%"
}, {
  id: 1,
  icon: "fab fa-css3-alt",
  name: "CSS",
  percentage: "70%"
}, {
  id: 2,
  icon: "fab fa-js",
  name: "JavaScript",
  percentage: "70%"
}, {
  id: 3,
  icon: "fab fa-git-square",
  name: "GIT",
  percentage: "70%"
}, {
  id: 4,
  icon: "fab fa-react",
  name: "React",
  percentage: "50%"
}, {
  id: 5,
  icon: "fas fa-database",
  name: "Firebase",
  percentage: "70%"
}, {
  id: 6,
  icon: "fab fa-vuejs",
  name: "Vue",
  percentage: "40%"
}, {
  id: 7,
  icon: "fab fa-node-js",
  name: "Node",
  percentage: "50%"
}];

export default () => {
  return (
    <div className="section skills">
      <div className="container-skills">
        <h1 className="section-title">Habilidades</h1>
        {
          skillsData.map(({ id, name, icon, percentage }) => (
            <div className="skill" key={id}>
              <span className={icon}></span>
              <p className="skillname">{name}</p>
              <span className="skillpercentage">{percentage}</span>
              <div className="progress-bar"><span style={{ width: percentage }}></span></div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

import React from "react";
import "./skills.sass";
// // npm install --save-dev @iconify/react @iconify/icons-simple-icons
// import { Icon, InlineIcon } from "@iconify/react";
// import reduxIcon from "@iconify/icons-simple-icons/redux";

const skillsData = [
  {
    id: 0,
    icon: "fab fa-html5",
    name: "HTML",
    percentage: "80%"
  },
  {
    id: 1,
    icon: "fab fa-css3-alt",
    name: "CSS",
    percentage: "80%"
  },
  {
    id: 2,
    icon: "fab fa-js",
    name: "JavaScript",
    percentage: "80%"
  },
  {
    id: 3,
    icon: "fab fa-git-square",
    name: "GIT",
    percentage: "80%"
  },
  {
    id: 4,
    icon: "fab fa-react",
    name: "React",
    percentage: "60%"
  },
  {
    id: 5,
    icon: "fas fa-database",
    name: "Firebase",
    percentage: "50%"
  },
  {
    id: 6,
    icon: "",
    name: "Redux",
    percentage: "20%"
  },
  {
    id: 7,
    icon: "fab fa-node-js",
    name: "Node",
    percentage: "50%"
  }
];

export default () => {
  return (
    <div className="section skills">
      <div className="container-skills">
        <h1 className="section-title">Habilidades</h1>
        {skillsData.map(({ id, name, icon, percentage }) => (
          <div className="skill" key={id}>
            <span className={icon} />
            <p className="skillname">{name}</p>
            <span className="skillpercentage">{percentage}</span>
            <div className="progress-bar">
              <span style={{ width: percentage }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

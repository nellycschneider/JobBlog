import React from "react";
import { Link } from "react-router-dom";

const ProjecstList = props => {
  const project = props.projects.map(project => {
    return (
      <Link to={`/portfolio/project/${project._id}`}>
        <div className="projects">
          <div className="imgBgDark" style={{ background: "#000", height: "200px", width: "200px" }}>
            <div
              className="img"
              style={{
                background: `url(${project.content[0].img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "130px",
                width: "130px"
              }}
            ></div>
          </div>
          <div className="contentProject">
            <p className="date">01-03-2019</p>
            <h4 className="title">{project.title}</h4>
            <p className="type">UI/UX</p>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="projectContainer">{project}</div>;
};

export default ProjecstList;

/*

<div key={project._id} style={{ border: "solid #000 3px", padding: "10px", margin: "10px", width: "200px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

*/

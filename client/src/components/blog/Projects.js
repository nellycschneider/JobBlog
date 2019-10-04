import React from "react";
import { Link } from "react-router-dom";

const ProjecstList = props => {
  const project = props.projects.map(project => {
    return (
      <Link to={`/portfolio/project/${project._id}`}>
        <div key={project._id} style={{ border: "solid #000 3px", padding: "10px", margin: "10px", width: "200px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    );
  });

  return <div>{project}</div>;
};

export default ProjecstList;

import React from "react";
import { Link } from "react-router-dom";

const ProjecstList = props => {
  const project =
    props &&
    props.projects.map(project => {
      const date = project.createdAt.slice(0, 10);
      const year = date.slice(0, 4);
      const month = date.slice(5, 7);
      const day = date.slice(8, 10);
      const titleDate = `${day}-${month}-${year}`;
      return (
        <Link to={`/portfolio/project/${project._id}`}>
          <div className="projects">
            <div
              className="imgBgDark"
              style={{ background: "#000", height: "250px", width: "250px" }}
            >
              <div
                className="img"
                style={{
                  background: `url(${project.content.length > 0 &&
                    project.content[0].img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "180px",
                  width: "180px"
                }}
              ></div>
            </div>
            <div className="contentProject">
              <p className="date">{titleDate}</p>
              <h4 className="title">{project.title}</h4>
              <p className="type">{project.type}</p>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <div className="projectPosition">
      <div className="projectWrap">{project}</div>
    </div>
  );
};

export default ProjecstList;

/*

<div key={project._id} style={{ border: "solid #000 3px", padding: "10px", margin: "10px", width: "200px" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

*/

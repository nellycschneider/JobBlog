import React from "react";
import { Link } from "react-router-dom";

const ProjectList = props => {
  return (
    <div>
      {props.projects.map(project => {
        return (
          <>
            <Link
              to={`/portfolio/dashboard/edit-project/${project._id}`}
              className="Link"
            >
              <div className="portfolioList">
                <div
                  className="imgBg"
                  style={{
                    background: "#D3D3D3",
                    height: "100px",
                    width: "100px"
                  }}
                >
                  <div
                    className="img"
                    style={{
                      background: `url(${project.content[0].img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "70px",
                      width: "70px"
                    }}
                  ></div>
                </div>
                <div className="content">
                  <p className="date">{project.updatedAt}</p>
                  <h4 className="title">{project.title}</h4>
                  <p className="type">UI/UX</p>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default ProjectList;

/*

 <Link to={`/portfolio/dashboard/edit-project/${project._id}`}></Link>
            <h3>
              {project.title}
              </h3>
              </Link>

*/

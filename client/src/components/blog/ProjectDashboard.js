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
                    height: "130px",
                    width: "130px"
                  }}
                >
                  <div
                    className="img"
                    style={{
                      background: `url(${project.content[0].img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100px",
                      width: "100px"
                    }}
                  ></div>
                </div>
                <div className="content">
                  <p className="date">01-03-2019</p>
                  <h4>{project.title}</h4>
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

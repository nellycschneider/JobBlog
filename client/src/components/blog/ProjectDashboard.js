import React from "react";
import { Link } from "react-router-dom";

const ProjectList = props => {
  return (
    <div>
      {props.projects.map((project, index) => {
        const date = project.createdAt.slice(0, 10);
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        const titleDate = `${day}-${month}-${year}`;
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
                      background: `url(${project.content.length > 0 &&
                        project.content[0].img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "70px",
                      width: "70px"
                    }}
                  ></div>
                </div>
                <div className="contentList">
                  <div className="break">
                    <p className="date">{titleDate}</p>
                  </div>
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

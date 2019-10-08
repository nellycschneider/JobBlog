import React from "react";
import { Link } from "react-router-dom";

const JobList = props => {
  return (
    <div>
      {props.projects.map(project => {
        return (
          <>
            <Link to={`/portfolio/dashboard/edit-project/${project._id}`} className="Link">
              <div className="portfolioList">
                <div className="imgBg" style={{ background: "#D3D3D3", height: "100px", width: "100px" }}>
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
                  <p className="date">01-03-2019</p>
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

export default JobList;

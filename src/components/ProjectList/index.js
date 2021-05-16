import React from "react";
import { Row } from "react-bootstrap";
import Portfolio from "../../components/Portfolio";
// import oasis from "../../images/oasis.png";
// import googlebooksearch from "../../images/googlebooksearch.png";
// import jobfinder from "../../images/jobfinder.png";
// import eatdaburger from "../../images/eatdaburger.png";
// import employeedirectory from "../../images/employeedirectory.png";
// import brewery from "../../images/brewery.png";
// import weatherdashboard from "../../images/weatherdashboard.png";
// import dayplanner from "../../images/dayplanner.png";
// import codequiz from "../../images/codequiz.png";

import "../../style.css";

export default function ProjectList() {
  const projects = [
    {
      id: "Name of application/website/project",
      title: "Title",
      description:
        "description ",
      imageUrl: "add without quotes from imported above",
      appUrl: "url to application",
    },

    
  ];
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center header-Projects">Projects</h2>
            </div>
          </div>

          <hr className="line"></hr>

          <br></br>
          <br></br>

          <Row>
            {projects.map((project) => (
              <Portfolio key={project.id} project={project} />
            ))}
          </Row>
        </div>
        <br></br>
        <br></br>
      </section>
    </>
  );
}

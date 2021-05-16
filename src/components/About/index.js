import React from "react";
// import profile from "../../images/profile.jpeg";
import "../../style.css";

export default function About() {
  return (
    <>
      <div id="aboutme">
        <div className="container" style={{ padding: "20px" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center header-aboutme">About Me</h2>
            </div>
          </div>
          <hr className="line"></hr>

          <div className="row">
            <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
              <div>
                {/* <img
                  style={{
                    width: "220px",
                    margin: "0 auto",
                    display: "block",
                    clipPath: "circle(110px at center)",
                  }}
                  src={profile}
                  alt="profile picture"
                /> */}
              </div>
            </div>
            <div
              className="col-md-9 col-sm-12 "
              style={{ margin: "0 auto", padding: "0 25px" }}
            >
              <p className="aboutme-description">
              Hi! My name is Fraser. I am currently studying full stack web development at the University of Sydney
              </p>

              

              <p className="aboutme-description">
              I have a background in conservation & Land management and horticulture. I enjoy gardening, and cultivating rare plants, specifically orchids in my greenhouse. {" "}
                <a href="#portfolio">
                  <strong>View Work.</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

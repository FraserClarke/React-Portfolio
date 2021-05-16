import React from "react";
// import resume from "../../images/resume.pdf";

import "../../style.css";

export default function index() {
  return (
    <>
      <div className="text-left home justify-content-center text-white">
        <div className="container-fluid ">
          <h3 className="header-name ml-5"> Welcome,</h3>
          <h3 className="header-name ml-5 ">Fraser Clarke</h3>
          <p className="header-description ml-5">
            Web Developer
          </p>
          <div className=" mb-3 mt-5 ml-5">
            <a
              href="https://github.com/FraserClarke"
              className="btn icons"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 35, color: "#E8E8E8", marginRight: 10 }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fraser-clarke-a425081b9/"
              className="btn icons"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 35, color: "#E8E8E8", marginRight: 10 }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:clarkefraser1@gmail.com"
              className="btn icons"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 35, color: "#E8E8E8", marginRight: 10 }}
            >
              <i className="fas fa-envelope"></i>
            </a>
            {/* <a
              href={resume}
              className="btn  icons"
              title="Resume"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 35, color: "#E8E8E8" }}
            >
              <i className="fas fa-file-pdf"></i>
            </a> */}
          </div>
          <p className="scrolldown">
            <a href="#aboutme">
              <i className="fa fa-chevron-circle-down down-arrow"></i>
            </a>
          </p>
        </div>
      </div>

      {/* Icons*/}
      <div class="icon-bar">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:clarkefraser1@gmail.com"
          className="email"
        >
          <i class="fa fa-envelope"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="tel: +61"
          className="phone"
        >
          <i class="fa fa-phone"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/fraser-clarke-a425081b9/"
          className="linkedin"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/FraserClarke"
          className="github"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </>
  );
}

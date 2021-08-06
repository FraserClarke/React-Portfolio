import React from "react";
import profile from "../../img/profile.jpg";
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
                <img
                  className="profilePictureAbout"
                  style={{
                    width: "220px",
                    margin: "0 auto",
                    display: "block",

                    clipPath: "circle(110px at center)",
                  }}
                  src={profile}
                  alt="profile picture"
                />
              </div>
            </div>
            <div
              className="col-md-9 col-sm-12 "
              style={{ margin: "0 auto", padding: "0 25px" }}
            >
              <p className="aboutme-description">
                Full Stack Web Developer with a background in
                Horticulture/Conservation and land management, which leverages
                my skills of being a team player and having a strong work ethic
                with great communication skills.
              </p>
              <p className="aboutme-description">
                I have recently completed a Certificate in Full Stack Web
                Development at the University of Sydney. During my projects
                throughout the course, I enjoyed both front end and back end
                work, especially developing dynamically generated data utilizing
                JavaScript, jQuery and React, then displaying that data and
                refining it utilizing CSS resulting in a positive user friendly
                experience.
              </p>
              <p className="aboutme-description">
                I'm excited to harness my previous skills and creativity as
                we’ll have recently acquired ones to further my career in Web
                Development, providing better and exciting experiences for users
                in the future.{" "}
                <a href="#portfolio">
                  <strong>View Work.</strong>
                </a>
              </p>
              <br></br>

              <p className="aboutme-description">
                <strong>Languages/ Technologies:</strong> JavaScript, HTML, CSS,
                React.js, MERN stack, jQuery, Node.js, SQL, NoSQL, ES6, ES5,
                Bootstrap, AJAX, Sequelize.js, Mongoose, Express.js, API’s,
                PWA’s, ORM, Handlebars,js, Heroku.
              </p>
              <p className="aboutme-description">
                <strong>Databases:</strong> MongoDB, JawsDB, IndexedDB, MySQL.
              </p>
              <p className="aboutme-description">
                <strong>Tools:</strong> Postman, DevTools, Robo3T, GitHub,
                KanBan, GitBash.{" "}
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

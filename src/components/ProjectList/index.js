import React from "react";
import { Row } from "react-bootstrap";
import Portfolio from "../../components/Portfolio";
import burgerLogger from "../../img/portfolio/burgerLogger.png";
import employeeDirectory from "../../img/portfolio/employeeDirectory.png";
import budgetTracker from "../../img/portfolio/budgetTracker.png";
import project1 from "../../img/portfolio/Project1.png";
import project2 from "../../img/portfolio/project2.png";
import workScheduler from "../../img/portfolio/workScheduler.png";

import "../../style.css";

export default function ProjectList() {
  const projects = [
    {
      id: "burgerLogger",
      title: "Burger Logger",
      description:
        "A burger logger application utilizing MySQL, Node, Express, Handlebars and ORM. The application uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML. ",
      imageUrl: burgerLogger,
      appUrl: "https://github.com/FraserClarke/Burger-Logger",
    },
    {
      id: "employeeDirectory",
      title: "Employee Directory",
      description:
        "A Employee-directory web application which enables the user to filter and sort through a list of employees with non sensitive information. The employees are generated using Random User API. This application uses React and is deployed using GitHub Pages. ",
      imageUrl: employeeDirectory,
      appUrl: "https://github.com/FraserClarke/Employee-Directory",
    },
    {
      id: "budgetTracker",
      title: "Budget Tracker",
      description:
        "A Budget Tracker application to allow for offline access and functionality. Populated when brought back online. Deployed using Heroku and MongoDB Atlas. ",
      imageUrl: budgetTracker,
      appUrl: "https://github.com/FraserClarke/Budget-Tracker",
    },
    {
      id: "workScheduler",
      title: "Work Scheduler",
      description: "Calendar application powered by jQuery ",
      imageUrl: workScheduler,
      appUrl: "https://github.com/FraserClarke/Work-Day-Scheduler",
    },
    {
      id: "GroupProject1/Cocktails-Cuisines ",
      title: "Group Project1/Cocktails-Cuisines",
      description:
        "Using this foodie- & drinkie-friendly application will allow a user to search for different cuisine or cocktail recipes by name. This app will run in the browser and features dynamic HTML, styling with CSS in conjunction with the Foundation framework powered by jQuery. ",
      imageUrl: project1,
      appUrl: "https://github.com/FraserClarke/Cocktails-Cuisines",
    },
    {
      id: "GroupProject2/Awesome-Sauce",
      title: "GroupProject2/Awesome-Sauce",
      description:
        "A collaboration project proudly brought to you by Team Awesome-Sauce, SourcE-commerce is an application that will help business owners track inventory & sales performance as well as provide an e-commerce storefront for customers! This app will run in the browser, Heroku Platform recommended, and features dynamic HTML via the use of handlebars, styling with CSS and data stored & retrieved using MySQL and Sequelize. ",
      imageUrl: project2,
      appUrl: "https://github.com/FraserClarke/Project2",
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

import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../style.css";

export default function Portfolio(props) {
  return (
    <>
      <Col lg={4} style={{ padding: "20px", backgroundColor: "transparent" }}>
        <Card
          className="card-style"
          style={{
            borderRadius: "10px",
            boxShadow: " 1px 1px 1px 0 #a9a9a9",
            textAlign: "center",
          }}
        >
          <Card.Img variant="top" src={props.project.imageUrl} />
          <Card.Body>
            <Card.Title className="card-title">
              <strong>{props.project.title}</strong>
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "1.2em",
                textAlign: "left",
                color: "#444444",
                padding: "15px",
              }}
            >
              {props.project.description}
            </Card.Text>

            <a
              style={{ minWidth: "60px", margin: "0px 0px 20px 20px" }}
              href={props.project.appUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fas fa-globe icon-card "
                style={{ fontSize: "30px" }}
              ></i>
            </a>
            <a
              style={{ minWidth: "60px", margin: "0px  0px 20px 20px" }}
              href={"https://github.com/" + props.project.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github icon-card "
                style={{ fontSize: "36px" }}
              ></i>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

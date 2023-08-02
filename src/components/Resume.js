import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../docs/Copy of Rodrigo Roldan resumee.pdf";


function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download> 
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Frameworks:</strong> React, jQuery, Bootstrap, Bulma
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MySQL, MongoDB
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> GitHub, Heroku, Chainalysis, TRM Labs
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Bachelor of Science in Economics</h4>
              <h5>University of the Ozarks</h5>
              <p>
                2019
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Transaction Monitoring Associate</h4>
              <h5>January 2021 - Present</h5>
              <p>
                Anti-Money Laundering
              </p>
            </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;
import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/me.png";
import "../style/About.css";

function About() {
  return (
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Rodrigo Roldan
                </Card.Title>
                <Card.Text>
                  Hi welcome! My name is Rodrigo Roldan and I'm currently a student at Tecnologico de Monterrey Coding Bootcamp. 
                  I currently work in a Fintech and I enrolled in this bootcamp, to learn more about how the apps we all use, work in the behind scenes.
                  In addition, I am really interested in cryptocurrencies so will all the things I have learned so far I can have a better understanding of
                  how the blockchain technology works. I think so far my coding journey can be described with the word "learning", it's been a while since I have
                  encountered topics that challenge me the way this bootcamp has and I think this has been great. I am a person who enjoys challenges and doesnt mind getting
                  outside of their comfort zone. I am really looking forward to use the things I have learned from this bootcamp in my professional life.
                </Card.Text>
                <Card.Text>
                  Outside of coding and professional aspects, I really enjoy exercising like hiking, soccer and skateboarding. In addition, I am big fan of concerts and I'm 
                  always in the look to go to a live performance. I am a big fan of videogames, especially when I get to play with some of my closest friends. I am a big foodie
                  and whenever I try food that I never had before I get really happy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
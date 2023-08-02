import React from "react";
import Navigation from "./Navigation";
import { Container} from "react-bootstrap";
import "../style/Header.css";
// Header jsut given a black color to align the navbar format
function Header() {
  return (
    <>
      <Container fluid className="bg-dark">
      </Container>
      <Navigation />
    </>
  );
}

export default Header;
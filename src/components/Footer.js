import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; //Used to get the github and linkedin icons
import "../style/Footer.css";

const socials = [
  {
    url: "https://github.com/RodrigoRoL",
    icon: faGithub,
    color: "white",
  },
  {
    url: "https://www.linkedin.com/in/rodrigo-roldan-05697817b/",
    icon: faLinkedin,
    color: "#2EACE8",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ url, icon, color }) => (
            <div
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
              </a>
            </div>
          ))}
        </section>
  
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import Project from "./Project";
import PlaceHolder from "../images/placeholder.png";
import TuneSurf from "../images/TuneSurf1.png";
import TrackGoals from "../images/logIn.png";
import TechBlog from "../images/techblog.jpeg";
import Text from "../images/text.png";
import Weather from "../images/weather.png";
import Calendar from "../images/calendar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "TuneSurf",
              description: "App that allows you to look for your favorite artist and receive Spotify, Tumblr and Ticketmaster related content via APIs(Group Project)",
              imgSrc: TuneSurf,
              deployedLink:
                "https://rodrigorol.github.io/TuneSurf/index.html",
              githubLink:
                "https://github.com/RodrigoRoL/TuneSurf",
            },
            {
              title: "Track your goals",
              description: "App that allows you to keep track of your financial goals (Group Projec)",
              imgSrc: TrackGoals,
              deployedLink:
                "https://track-your-goals-180d59665ffa.herokuapp.com/login",
              githubLink:
                "https://github.com/1alyciaoliveira/TrackYourGoals",
            },
            {
              title: "Tech Blog",
              description: "Project is based on the MVC (Model, View, Controller)",
              imgSrc: TechBlog,
              deployedLink:
                "https://techblogrl-49a24107133b.herokuapp.com/",
              githubLink:
                "https://github.com/RodrigoRoL/MyTechBlog",
            },
            {
              title: "Edit Text",
              description: "Text editor that allows you to download the app and stores data with the help of IndexedDb",
              imgSrc: Text,
              deployedLink:
                "https://edit-text-6d7b09dd0797.herokuapp.com/",
              githubLink:
                "https://github.com/RodrigoRoL/EditText",
            },
            {
              title: "My Calendar",
              description: "Plan your day with this calendar app, that allows you to schedule time blocks from your day",
              imgSrc: Calendar,
              deployedLink:
                "https://rodrigorol.github.io/mycalendar/",
              githubLink:
                "https://github.com/RodrigoRoL/mycalendar",
            },
            {
              title: "Check-o your weather-o",
              description: "Weather Dashboard, using Server-Side APIs",
              imgSrc: Weather,
              deployedLink:
                "https://github.com/RodrigoRoL/checkweather",
              githubLink:
                "https://rodrigorol.github.io/checkweather/",
            },
          ].map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
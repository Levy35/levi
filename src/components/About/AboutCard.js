import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello again, I am <span className="purple">Levi Coc </span>
            from <span className="purple"> Maya Mopan Village, Stann Creek Belize.</span>
            <br />
            I am currently employed as a Software Developer | Headend Entery Level Technician.
            <br />
            I hold Bachelor's Degree (BINT) in Computer Science at
            University of Belize.
            <br />
            <br />
            In addition to my passion for a Software Developer, I enjoy engaging in various activities such
            as: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Viewing short-form video content across various platforms 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gain Interest in Cars
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">LEVI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import "./About.css";
import about_img from "../../assets/asd.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nam
          esse odit fugit, laborum natus! Voluptatibus vero repellendus
          voluptatum tempora error rem harum sint totam, similique dolor nihil
          illo neque?
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring people to make a
          meaningful impact in communities.
        </p>
        <p>
          Our diverse range of services offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future.
        </p>
      </div>
    </div>
  );
};

export default About;

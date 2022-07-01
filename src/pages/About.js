import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PlusCard from "../components/PlusCard";
import {
  BsImages,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import TeamCard from "../components/TeamCard";

function About() {
  const [pluses, setPluses] = useState([
    {
      id: 1,
      title: "High Quality Images",
      icon: <BsImages />,
      desc: "Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te",
    },
    {
      id: 2,
      title: "Abundant Experience",
      icon: <BsImages />,
      desc: "Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te",
    },
    {
      id: 3,
      title: "Modern Equipments",
      icon: <BsImages />,
      desc: "Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te",
    },
  ]);
  const [team, setTeam] = useState([
    { id: 1, name: "Andrew Dean", role: "PHOTOGRAPHER", img: "team1.webp" },
    { id: 2, name: "Tommy Kim", role: "PHOTOGRAPHER", img: "team2.webp" },
    { id: 3, name: "Max McCormick", role: "PHOTOGRAPHER", img: "team3.webp" },
    { id: 4, name: "Robert Ward", role: "PHOTOGRAPHER", img: "team4.webp" },
  ]);
  return (
    <div className="about-container">
      <div className="about-block">
        <div className="info-block">
          <h1>
            <strong>We</strong> Live for Passion
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim
            ipsam et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim
            ipsam et dolore magnam aliquam quaerat voluptatem.
          </p>
          <div className={"contact-btn"}>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </div>
        </div>
        <div className="info-image">
          <img src="./img/about-image.webp" />
        </div>
      </div>
      <div className="plus-block">
        <div>
          <h1>Why Choose Us</h1>
        </div>
        <div className="plus-card-container">
          <PlusCard items={pluses} />
        </div>
      </div>
      <div className="team-container">
        <div>
          <h2>Our Team</h2>
        </div>
        <div className="team-block">
         <TeamCard items={team}/>
        </div>
      </div>
    </div>
  );
}

export default About;

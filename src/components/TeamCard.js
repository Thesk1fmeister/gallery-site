import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsPinterest } from "react-icons/bs";

function TeamCard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="team-card">
          <img src={"./img/" + item.img} />
          <h5>{item.name}</h5>
          <span>{item.role}</span>
          <ul>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              <BsPinterest />
            </a>
          </ul>
        </div>
      ))}
    </>
  );
}

export default TeamCard;

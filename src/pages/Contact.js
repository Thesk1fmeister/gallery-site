import React from "react";
import "../App.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info-block">
        <div className="left-block">
          <h1>Let’s Work Together</h1>
        </div>
        <div className="central-block">
          <ul>
            <li>
              <span>Email</span>
              <p>info.deercreative@gmail.com</p>
            </li>
            <li>
              <span>Call us</span>
              <p>+6511.188.888</p>
            </li>
          </ul>
        </div>
        <div className="right-block">
          <ul>
            <li>
              <span>Visit us</span>
              <p>60-49 Road 11378 New York</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import Gallery from "./Gallery";

function HeaderCarousel() {
  return (
    <>
      <div className="header-carousel-container">
        <div className="welcome-block">
          <div className="welcome-container">
            <h1>
              Hello <br />
              I'm Serhii
            </h1>
            <p>
              I photograph very instinctively. I see how it is taken like that.
              I do not follow certain styles, philosophies or teachers.
            </p>
          </div>
        </div>
      </div>
      <Gallery/>
    </>
  );
}

export default HeaderCarousel;

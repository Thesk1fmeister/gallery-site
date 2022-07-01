import React, { useState } from "react";
import FooterGalleryCard from "../components/FooterGalleryCard";

function Footer() {
  const [footerImages, setFooterImages] = useState([
    { id: 1, img: "fgl1.webp" },
    { id: 2, img: "fgl2.webp" },
    { id: 3, img: "fgl3.webp" },
    { id: 4, img: "fgl4.webp" },
    { id: 5, img: "fgl5.webp" },
    { id: 6, img: "fgl6.webp" },
  ]);
  return (
    <footer>
      <div className="footer-container">
        <h1>Follow Instagram</h1>
        <p>@Alime_photographer</p>
        <div className="footer-gallery-container">
          <FooterGalleryCard items={footerImages}/>
        </div>
        <h3>Copyright &copy;2022 All rights reserved</h3>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import GalleryCard from "../components/GalleryCard";

function Gallery() {
  const [images, setImages] = useState([
    { id: 1, img: "gallery1.webp", category: "Nature" },
    { id: 2, img: "gallery2.webp", category: "Human" },
    { id: 3, img: "gallery3.webp", category: "Country" },
    { id: 4, img: "gallery4.webp", category: "Video" },
    { id: 5, img: "gallery5.webp", category: "Nature" },
    { id: 6, img: "gallery6.webp", category: "Country" },
    { id: 7, img: "gallery7.webp", category: "Nature" },
    { id: 8, img: "gallery10.webp", category: "Human" },
    { id: 9, img: "gallery9.webp", category: "Video" },
  ]);
  const [currentImage, setCurrentImage] = useState(images);
  const [category, setCategory] = useState([
    { id: "All", category: "All" },
    { id: "Human", category: "Human" },
    { id: "Nature", category: "Nature" },
    { id: "Country", category: "Country" },
    { id: "Video", category: "Video" },
  ]);

  const chooseCategory = (category) => {
    if (category === "All") {
      setCurrentImage(images);
      return;
    }
    setCurrentImage(images.filter((el) => el.category === category));
  };

  return (
    <div className="gallery-container">
      <div className="photo-category">
        <CategoryCard items={category} choose={chooseCategory} />
      </div>

      <div className="gallery-block">
        <GalleryCard items={currentImage} />
      </div>
      <div className="btn-container">
        <NavLink to={"/gallery"} className="view-more-btn">
          View More
        </NavLink>
      </div>
    </div>
  );
}

export default Gallery;

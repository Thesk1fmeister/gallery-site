import React from "react";

function GalleryCard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="gallery-card">
          <img src={"./img/" + item.img} />
        </div>
      ))}
    </>
  );
}

export default GalleryCard;

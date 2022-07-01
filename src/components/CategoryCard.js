import React, { useState } from "react";
import "../App.css";

function CategoryCard({ items, choose,active }) {
  return (
    <ul>
      {items.map((el) => (
        <a id={el.id} onClick={() => choose(el.id)}>
          {el.category}
        </a>
      ))}
    </ul>
  );
}

export default CategoryCard;

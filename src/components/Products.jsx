import React from "react";
import "./Products.css";

function Products({ name, type, image, capacity, unit }) {
  return (
    <div className="products">
      <div className="products__left">
        <img className="prducts__image" src={image} alt="" />
      </div>

      <div className="products__right">
        <h4>{name}</h4>
        <p className="type">{type}</p>
        <p className="capacity">{capacity}{` ${unit}`}</p>
        <button className="addButton"> + Add to inquiry</button>
      </div>
    </div>
  );
}

export default Products;

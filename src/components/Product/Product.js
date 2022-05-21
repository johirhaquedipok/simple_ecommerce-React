import React from "react";
import "./Product.css";
const Product = ({ laptop, handleAddToCart }) => {
  const { name, cpu, images, company, price } = laptop;
  return (
    <div className="card">
      <img src={images} alt="name" />
      <h4>Name: {name}</h4>
      <h5>Brand Name: {company}</h5>
      <p>Processor: {cpu}</p>
      <p>Price : ${price}</p>
      <button
        onClick={() => handleAddToCart(laptop)}
        // disabled={cart.length >= 3 && "disabled"}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

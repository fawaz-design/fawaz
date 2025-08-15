import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <div className="product-info">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-desc">{product.description}</p>
      <div className="product-bottom">
        <span className="product-price">${product.price}</span>
        <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;

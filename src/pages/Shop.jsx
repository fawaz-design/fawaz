import React from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

const Shop = ({ onAddToCart }) => (
  <div>
    <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0" }}>Shop Furniture</h2>
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

export default Shop;

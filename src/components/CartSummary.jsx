import React from "react";
import "./CartSummary.css";

const CartSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className="cart-summary">
      <span>🛒 {count} items</span>
      <span>Total: ${total.toFixed(2)}</span>
    </div>
  );
};

export default CartSummary;

import React, { useState, createContext } from "react";
import Cart_api from "./Cart_api";
import ContextCart from "./ContextCart";
import "./Cart.css";

export const createcontext = createContext();

const Cart = () => {
  const [product, setProduct] = useState(Cart_api);
  return (
    <>
      <createcontext.Provider value={Cart_api}>
        <ContextCart />
      </createcontext.Provider>
    </>
  );
};

export default Cart;

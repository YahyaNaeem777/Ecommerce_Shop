import React, { useState } from "react";
import "./Cart.css";
import Items from "./Items";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Cart_api from "./Cart_api";

const Cart = () => {
  const [product, setProduct] = useState(Cart_api);

  return (
    <>
      <div className="container">
        <div className="row shopping_Cart">
          <div className="col-md-6 col-lg-6 col-sm-6  continue_shopping">
            <ArrowBackIcon />
            <h3>Continue Shopping</h3>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 d-flex flex-row-reverse">
            <ShoppingCartCheckoutIcon className="your_items"></ShoppingCartCheckoutIcon>
          </div>
        </div>
        <hr />

        <section className="main_cart_section mt-5">
          <h1>Shopping Cart</h1>
          <p>
            You have total <span>7</span> items in Shopping cart
          </p>
          {/* <Scrollbars></Scrollbars> */}
          <div className="container-fluid cart_items_main_div">
            {product.map((currentElem) => {
              return <Items key={currentElem.id} {...currentElem} />;
            })}
          </div>

          <div className="cart_total my-5 d-flex align-items-center flex-column">
            <h3>
              Cart Total : <span>$2000</span>
            </h3>
            <button className="btn btn-outline-info w-25">Checkout</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;

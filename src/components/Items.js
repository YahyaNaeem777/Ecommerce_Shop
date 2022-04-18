import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
// import { Scrollbars } from "react-custom-scrollbars-2";
import image from "./Images/Iphone/apple-iphone-12.jpg";

const Items = ({ name, description, price, img, amount }) => {
  return (
    <>
      <div className="row cart_items d-flex justify-content-between align-items-center gx-2">
        <div className="col-lg-2 col-md-2 col-sm-12  d-flex align-items-center justify-content-evenly mb-4 mt-2">
          <img src={image} alt="Iphone" className="image" />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12 d-flex justify-content-evenly align-items-center">
          <div className="col-lg-3 col-md-3 col-sm-3 d-flex flex-column">
            <p className="text-danger">{name}</p>
            <p>Blue Color</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
            <RemoveIcon />
            <input
              type="text"
              className="item_amount text-center"
              value={"7"}
            />
            <AddIcon />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 d-flex flex-column">
            <h4>Price</h4>
            <h5>$1200</h5>
          </div>
          <div className="col-lg-3 col-md-1 col-sm-2">
            <CloseIcon />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;

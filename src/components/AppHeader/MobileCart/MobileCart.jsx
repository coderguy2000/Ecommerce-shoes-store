import React from "react";
import CartPage from "../../CartPage/CartPage";
import "./style.scss";

const MobileCart = ({ openCartOverlay, setOpenCartOverlay }) => {
  return (
    <div
      className={`cart--overlay ${
        !openCartOverlay ? "cart--overlay-remove" : ""
      }`}
    >
      <div className="mobilecart-menu">
        <div className="cart-heading">
          <div className="heading">Your shopping Cart</div>{" "}
          <div className="cross-icon" onClick={() => setOpenCartOverlay(false)}>
            <img src={"/svg/hamburger-cross.png"} />
          </div>{" "}
        </div>
        <CartPage />
      </div>
    </div>
  );
};

export default MobileCart;

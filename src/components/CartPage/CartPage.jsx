import React, { useContext } from "react";
import "./style.scss";
import ProductCard from "./ProductCard/ProductCard";
import { CartContext } from "../../App";

const CartPage = () => {
  const cartContextData = useContext(CartContext);
  const cartItems = cartContextData[0];
  const setCartItems = cartContextData[1];

  return (
    <div className="cart--page">
      <div className="cart--heading">
        <h2>Cart </h2>
      </div>
      <div className="cart--product--list">
        {cartItems?.length === 0 ? (
          <div className="empty--cart">What's stopping you?</div>
        ) : (
          <></>
        )}
        {cartItems?.map((product, index) => {
          return (
            <ProductCard
              product={product}
              key={index}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;

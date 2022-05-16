import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../../Data/ProductData";
import { RatingStar } from "rating-star";
import CartPage from "../CartPage/CartPage";
import { CartContext } from "../../App";
import "./style.scss";

const Page = () => {
  const cartContextData = useContext(CartContext);
  const cartItems = cartContextData[0];
  const setCartItems = cartContextData[1];

  let { slug } = useParams();
  const product = ProductData?.products?.filter((product) => {
    return product.id === slug;
  })[0];
  const [showProduct, setShowproduct] = useState(product?.imageUrl[0]?.url);
  const [rating, setRating] = React.useState(5);

  const onRatingChange = (score) => {
    setRating(score);
  };
  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };
  return (
    <>
      <div className="pdp-page">
        <div className="product-info">
          <div className="about--product">
            <div className="main-image">
              <img src={showProduct} />
              <div className="rating-product">
                Rate Product{" "}
                <RatingStar
                  clickable
                  id={product?.id}
                  size={18}
                  rating={rating}
                  onRatingChange={onRatingChange}
                />
              </div>
            </div>
            <div className="thumbnails">
              {product?.imageUrl?.map((prod, index) => {
                return (
                  <div
                    className={`thumbnail--image ${
                      showProduct === prod?.url ? "selected--image" : ""
                    }`}
                    onClick={() => setShowproduct(prod?.url)}
                    key={index}
                  >
                    <img src={prod?.url} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product--info--button">
            <div className="shareDesign">Share Design</div>
            <div className="addToCart" onClick={() => addToCart()}>
              Add to Cart
            </div>
          </div>
        </div>
        <CartPage />
      </div>
    </>
  );
};

export default Page;

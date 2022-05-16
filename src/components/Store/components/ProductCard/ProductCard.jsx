import React, { useContext } from "react";
import "./style.scss";
import { RatingStar } from "rating-star";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../../../App";

const ProductCard = ({ product }) => {
  const cartContextData = useContext(CartContext);
  const cartItems = cartContextData[0];
  const setCartItems = cartContextData[1];

  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  const location = useLocation();
  return (
    <>
      <div className="store--productcard">
        <Link to={`/store/product/${product?.id}`}>
          <div className="productCard">
            <div className="productCard--image">
              <img
                src={
                  (product?.imageUrl?.length > 0 &&
                    product?.imageUrl[0]?.url) ||
                  "/images/no_image.png"
                }
              />
            </div>
            <div className="productCard--name">
              <h3>{product?.name}</h3>
            </div>
            <div className="productCard--price--rating">
              <div className="price">
                <p>Rs {product?.price?.discounted}</p>
              </div>
              <div className="rating">
                <RatingStar
                  id={product?.id}
                  rating={product?.rating}
                  size={18}
                />
              </div>
            </div>
          </div>
        </Link>
        <div className="addToCart" onClick={() => addToCart()}>
          Add to Cart
        </div>
      </div>
    </>
  );
};

export default ProductCard;

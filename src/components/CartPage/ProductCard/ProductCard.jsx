import React from "react";
import "./style.scss";
import { RatingStar } from "rating-star";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product, cartItems, setCartItems }) => {
  const removeProductFromCart = (id) => {
    console.log("chunu", id, cartItems);
    setCartItems(
      cartItems?.filter((item) => {
        return item?.id !== id;
      })
    );
  };
  const location = useLocation();
  return (
    <div className="cart--productCard">
      <div
        className="remove--product"
        onClick={() => {
          removeProductFromCart(product?.id);
        }}
      >
        <img src={"/svg/close-red.svg"} />
      </div>
      <Link to={`/store/product/${product?.id}`}>
        <div>
          <div className="productCard--image">
            <img
              src={
                (product?.imageUrl?.length > 0 && product?.imageUrl[0]?.url) ||
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
              <RatingStar id={product?.id} rating={product?.rating} size={18} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./style.scss";

const ProductList = ({ data }) => {
  return (
    <div className="product--list">
      {data?.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductList;

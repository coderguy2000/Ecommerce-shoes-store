import React from "react";
import ProductList from "../ProductList/ProductList";
import "./style.scss";

const ProductPage = ({ data }) => {
  return (
    <div className="main--products">
      <div>
        <h2>{data?.heading}</h2>
        {/* <SeachIcon />
        <SortBy /> */}
      </div>
      {data?.products?.length > 0 ? (
        <ProductList data={data?.products} />
      ) : (
        <div className="no--product">No Product Available</div>
      )}
    </div>
  );
};

export default ProductPage;

import React, { useState } from "react";
import "./style.scss";
import ProductPage from "./components/ProductPage/ProductPage";
import Filter from "./components/Filter/FilterPage";
import ProductData from "../../Data/ProductData";
import CartPage from "../CartPage/CartPage";

const Page = () => {
  const [filterData, setFilterData] = useState(ProductData);

  return (
    <div className="product-page">
      <Filter setFilterData={setFilterData} />
      <ProductPage data={filterData} />
      <CartPage />
    </div>
  );
};

export default Page;

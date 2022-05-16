import React, { useEffect, useState } from "react";
import FilterProperty from "../../../../Data/FilterProperty";
import ProductData from "../../../../Data/ProductData";
import "./style.scss";

const FilterPage = ({ setFilterData }) => {
  const filterApply = (e) => {
    e.preventDefault();

    let prod = ProductData;
    for (let i = 0; i < e?.target?.length; i++) {
      const filter = e?.target[i];
      if (filter.checked) {
        const selectedRadioValue = JSON.parse(filter?.value);
        if (filter.name === "Cost") {
          prod = {
            heading: prod?.heading,
            products: prod?.products?.filter(({ price }) => {
              return (
                price?.discounted >= selectedRadioValue?.lowerRange &&
                price?.discounted <= selectedRadioValue?.upperRange
              );
            }),
          };
        } else if (filter?.name === "Colour") {
          prod = {
            heading: prod?.heading,
            products: prod?.products?.filter(({ color }) => {
              return color === selectedRadioValue?.name;
            }),
          };
        } else if (filter?.name === "Design Template") {
          prod = {
            heading: prod?.heading,
            products: prod?.products?.filter(({ design }) => {
              return design === selectedRadioValue?.no;
            }),
          };
        } else if (filter?.name === "Type") {
          prod = {
            heading: prod?.heading,
            products: prod?.products?.filter(({ type }) => {
              return type === selectedRadioValue?.typeName;
            }),
          };
        }
      }
    }
    setFilterData(prod);
  };

  return (
    <div className="filterPage">
      <div className="topHeading">
        <h2>{FilterProperty?.heading || "FILTERS"}</h2>
      </div>
      <div className="filters">
        <form onSubmit={(e) => filterApply(e)}>
          {FilterProperty?.filterOnBasis?.map((filter, index) => {
            switch (filter?.name) {
              case "Cost":
                return (
                  <div className="filter--cost" key={index}>
                    <div className="filter--cost--heading">Cost</div>
                    {filter?.pricing?.map((price, index) => {
                      return (
                        <>
                          <div className="input--heading">
                            <input
                              type="radio"
                              id={`${filter?.name}-${price?.id}`}
                              name={filter?.name}
                              value={JSON.stringify(price)}
                              key={index}
                            />
                            <span class="checkmark"></span>
                            {`Rs ${price?.lowerRange}${
                              price?.upperRange === Number.MAX_VALUE
                                ? "+"
                                : `- ${price?.upperRange}`
                            }`}
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              case "Colour":
                return (
                  <div className="filter--color" key={index}>
                    <div className="filter--color--heading">Colour</div>
                    {filter?.color?.map((color, index) => {
                      return (
                        <>
                          <div className="input--heading">
                            <input
                              type="radio"
                              id={`${filter?.name}-${color?.id}`}
                              name={filter?.name}
                              value={JSON.stringify(color)}
                              key={index}
                            />
                            <div
                              className="colorBox"
                              style={{ background: color?.name }}
                            >
                              {color?.name}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              case "Design Template":
                return (
                  <div className="filter--design" key={index}>
                    <div className="filter--design--heading">
                      Design Template
                    </div>
                    {filter?.design?.map((des, index) => {
                      return (
                        <>
                          <div className="input--heading">
                            <input
                              type="radio"
                              id={`${filter?.name}-${des?.id}`}
                              name={filter?.name}
                              value={JSON.stringify(des)}
                              key={index}
                            />
                            {des?.no}
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              case "Type":
                return (
                  <div className="filter--type" key={index}>
                    <div className="filter--type--heading">Type</div>
                    {filter?.type?.map((type, index) => {
                      return (
                        <>
                          <div className="input--heading">
                            <input
                              type="radio"
                              id={`${filter?.name}-${type?.id}`}
                              name={filter?.name}
                              value={JSON.stringify(type)}
                              key={index}
                            />
                            {type?.typeName}
                          </div>
                        </>
                      );
                    })}
                  </div>
                );

              default:
                return <></>;
            }
          })}
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default FilterPage;

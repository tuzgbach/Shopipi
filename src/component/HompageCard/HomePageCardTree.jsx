import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePageCardTree = ({ link }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const proArr = Object.keys(data).map((key) => data[key]);
        setProducts(proArr.slice(0, limit));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [limit]);

  return (
    <div className="h-[440px] bg-white m-3 z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
      {products.map((product, index) => (
        <div
          key={index}
          className={`mb-1 xl:mb-10 relative overflow-hidden ${
            index === 0 ? "col-span-full md:col-span-2 lg:col-span-4" : ""
          }`}
          style={{ margin: "10px" }}
        >
          <div className="text-sm xl:text-sm font-light mb-1 inline-block min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {product.title}
          </div>
          <img
            className="object-cover w-full h-auto rounded-md"
            src={product.image}
            alt="HomeCard"
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageCardTree;

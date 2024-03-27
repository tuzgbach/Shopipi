import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePageCardTree = ({ link }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);

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
    <div className="h-[440px] bg-white m-auto z-30 grid grid-cols-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="mb-1 xl:mb-10 relative overflow-hidden"
          style={{ margin: "0.5rem" }}
        >
          <div className="text-sm xl:text-sm font-light mb-1">
            {product.title}
          </div>
          <img
            className="object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-in-out"
            src={product.image}
            alt="HomeCard"
          />
        </div>
      ))}
      <div className="text-sm xl:text-sm text-blue-500 mt-52 mb-3">{link}</div>
    </div>
  );
};

export default HomePageCardTree;

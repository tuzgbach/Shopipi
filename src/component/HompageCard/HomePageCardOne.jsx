import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePageCardOne = ({ link }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        // Chuyển OJ tượng thành []
        const productsArray = Object.keys(data).map((key) => data[key]);
        setProducts(productsArray.slice(0, limit));
        console.log(productsArray.slice(0, limit)); // Log the products array
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [limit]);

  return (
    <div className="h-[440px] bg-white m-5 z-30 grid grid-cols-2 grid-rows-2">
      {products.map((product, index) => (
        <div
          key={index}
          className="mb-6 xl:mb-10 relative overflow-hidden"
          style={{ margin: "1rem" }}
        >
          <div className="text-sm xl:text-sm font-light mb-1">
            {product.title}
          </div>
          <img
            className="object-cover h-40 w-full transform hover:scale-105 transition-transform duration-500 ease-in-out"
            src={product.image}
            alt="HomeCard"
          />
        </div>
      ))}
      <div className="text-xs xl:text-sm text-blue-500 ml-4 mb-3">{link}</div>
    </div>
  );
};

export default HomePageCardOne;

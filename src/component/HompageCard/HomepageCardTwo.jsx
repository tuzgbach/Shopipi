import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomepageCardTwo = ({ link }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        // Chuyển OJ tượng thành []
        const productsArray = Object.keys(data).map((key) => data[key]);
        setProducts(productsArray.slice(0, limit));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [limit]);

  return (
    <div className="h-[440px] bg-white m-3 z-30 rounded-lg">
      {products.map((product, index) => (
        <div
          key={index}
          className=" mb-1 xl:mb-10 relative overflow-hidden"
          style={{ margin: "1rem" }}
        >
          <div className="text-sm xl:text-sm font-light inline-block min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {product.title}
          </div>
          <img
            className="object-cover w-full h-[22rem] transition-transform duration-500 ease-in-out rounded-md"
            src={product.image}
            alt="HomeCard"
          />
        </div>
      ))}
      <div className="text-xs xl:text-sm text-blue-500 ml-2">{link}</div>
    </div>
  );
};

export default HomepageCardTwo;

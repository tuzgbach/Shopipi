import React, { useEffect, useState } from "react";

const HomePageCard = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);

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
    <div className="h-[420px] bg-white m-4 z-30 rounded-lg grid grid-cols-2 grid-rows-2">
      {products.map((product, index) => (
        <div
          key={index}
          className="mb-6 xl:mb-10 relative overflow-hidden"
          style={{ margin: "0.5rem" }}
        >
          <img
            className="object-cover w-full h-48 mb-5 rounded-lg transition duration-300 transform hover:scale-105" // Đặt kích thước cho hình ảnh
            src={product.image}
            alt="HomeCard"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 text-white text-center">
            <span className="text-sm xl:text-lg">{product.link}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageCard;

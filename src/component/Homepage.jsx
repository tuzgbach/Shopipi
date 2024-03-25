import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const productsArray = Object.keys(data).map((key) => data[key]);
        setProducts(productsArray.slice(0, limit));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [limit]);

  return (
    <div className="bg-shopipi-background">
      <div className="min-[1000px] max-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {products.map((product) => (
            <HomePageCard
              key={product.id}
              title={product.title}
              link={product.link}
            />
          ))}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

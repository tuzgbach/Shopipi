import React, { useEffect, useState } from "react";

import HomePageCardOne from "./HompageCard/HomePageCardOne";
import HomepageCardTwo from "./HompageCard/HomepageCardTwo";
import HomePageCardTree from "./HompageCard/HomePageCardTree";
import Footer from "./Footer/Footer";
import CarouselProduct from "./Carousel/CarouselProduct";
import CarouselCategory from "./Carousel/CarouselCategory";
import Carousel from "./Carousel/Carousel";
import CarouselProuduct2 from "./Carousel/CarouselProuduct2";
import Button from "./Button/Button";
import Signin from "./Button/Signin";

const Homepage = () => {
  const [products, setProducts] = useState({
    products1: [],
    products2: [],
    products3: [],
  });
  const [limits, setLimits] = useState({ limit1: 1, limit2: 1, limit3: 1 });
  const [signin, setSignin] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const productsArray = Object.keys(data).map((key) => data[key]);
        setProducts({
          products1: productsArray.slice(0, limits.limit1),
          products2: productsArray.slice(0, limits.limit2),
          products3: productsArray.slice(0, limits.limit3),
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [limits]);

  const renderProductCard = (product, CardComponent) => (
    <CardComponent key={product.id} link={"See more"} />
  );

  return (
    <div className="bg-shopipi-background">
      <div className="min-[1000px] max-[1500px] mr-[6rem] ml-[6rem]">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 ">
          {products.products1.map((product) =>
            renderProductCard(product, HomePageCardOne)
          )}
          {products.products3.map((product) =>
            renderProductCard(product, HomePageCardTree)
          )}
          {products.products2.map((product) =>
            renderProductCard(product, HomepageCardTwo)
          )}
          {products.products1.map((product) =>
            renderProductCard(product, HomePageCardOne)
          )}
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3">
          {products.products2.map((product) =>
            renderProductCard(product, HomepageCardTwo)
          )}
          {products.products3.map((product) =>
            renderProductCard(product, HomePageCardTree)
          )}
          {products.products1.map((product) =>
            renderProductCard(product, HomePageCardOne)
          )}
        </div>
        <CarouselProduct />
        <CarouselProuduct2 />
        <CarouselCategory />
        <div className="grid grid-cols-2 xl:grid-cols-3">
          {products.products2.map((product) =>
            renderProductCard(product, HomepageCardTwo)
          )}
          {products.products3.map((product) =>
            renderProductCard(product, HomePageCardTree)
          )}
          {products.products1.map((product) =>
            renderProductCard(product, HomePageCardOne)
          )}
        </div>
        <CarouselProduct />
        <Button>
          <Signin />
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

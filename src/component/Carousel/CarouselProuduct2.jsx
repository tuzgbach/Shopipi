import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const CarouselProuduct2 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const productsArray = Object.keys(data).map((key) => data[key]);
        setProducts(productsArray);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-white m-3 p-3">
      <div className="text-2xl font-semibold p-3">Hàng được xem nhiều nhất</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        scrollbar={{ draggable: true }} // add scrollbar, cho phép kéo thanh scrollbar
        modules={[Navigation, Scrollbar]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col items-center text-sm font-normal p-1.5"
            >
              <img
                className="object-cover w-full h-80 rounded-lg"
                src={product.image}
                alt="HomeCard"
              />
              <div className="mt-2 flex justify-center items-center w-full gap-1">
                <span className="mt-1 bg-red-500 text-white rounded-md">
                  {product.discount}
                </span>
                <span className="mt-1 text-1sm bg-yellow-300 rounded-md">
                  {product.badge}
                </span>
              </div>
              <div className="block flex mt-2">
                <span className="">{product.price.toLocaleString()} đ</span>
                <span className="line-through">
                  {product.oldPrice.toLocaleString()} đ
                </span>
              </div>
              <div className="mt-2 flex justify-center items-center w-full mb-5">
                <span className="inline-block min-w-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {product.title}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProuduct2;

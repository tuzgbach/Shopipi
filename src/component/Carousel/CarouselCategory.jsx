import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const CarouselCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  useEffect(() => {
    fetch("/data/categories.json")
      .then((response) => response.json())
      .then((data) => {
        const categoriesArray = Object.keys(data).map((key) => data[key]);
        setCategories(categoriesArray);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-white m-3 p-3">
      <div className="text-2xl font-semibold p-3">Danh mục hàng hoá</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            onClick={() => searchCategory(category.id)}
            className="cursor-pointer flex flex-col items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-2">
              <img
                className="object-cover w-full h-full"
                src={category.src}
                alt={`${category.name} category`}
              />
            </div>
            <span className="text-sm text-center">{category.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

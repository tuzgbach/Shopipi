import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  const categories = [
    {
      name: "Deals",
      src: "https://salt.tikicdn.com/ts/upload/18/ec/0b/7f09f2ec4d8d5ceb81b8c043dbc747d0.png",
    },
    {
      name: "Amazon",
      src: "https://salt.tikicdn.com/ts/upload/84/e5/5a/ef4abf5ef55fe5db81ac7a900de40368.png",
    },
    {
      name: "Fashion",
      src: "https://salt.tikicdn.com/ts/upload/b1/5f/5e/501a9b0ed0c1735d3e3872bad6e587df.png",
    },
    {
      name: "Computers",
      src: "https://salt.tikicdn.com/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png",
    },
    {
      name: "Home",
      src: "https://salt.tikicdn.com/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png",
    },
    { name: "Mobiles", src: "../images/category_5.jpg" },
    { name: "Mobiles", src: "../images/category_5.jpg" },
    { name: "Mobiles", src: "../images/category_5.jpg" },
    { name: "Mobiles", src: "../images/category_5.jpg" },
    { name: "Mobiles", src: "../images/category_5.jpg" },
  ];

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.name}
            onClick={() => searchCategory(category.name)}
            className="cursor-pointer"
          >
            <img
              className="w-16 h-24 object-cover"
              src={category.src}
              alt={`${category.name} category`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

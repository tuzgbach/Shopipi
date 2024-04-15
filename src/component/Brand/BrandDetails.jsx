import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const BrandDetails = ({ product }) => {
  const followBrand = (brand) => {
    console.log(`Following brand: ${brand}`);
  };

  const [showBrands, setShowBrands] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleShowBrands = () => {
    setShowBrands(!showBrands);
  };

  return (
    <div className="text-sm xl:text-xl flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <div
          onMouseEnter={() => setShowBrands(true)}
          onMouseLeave={() => setShowBrands(false)}
          className="relative"
          onClick={handleShowBrands}
        >
          <div className="hover:bg-gray-200 w-9 p-2 rounded-full cursor-pointer transition-colors duration-200">
            <FaChevronCircleDown style={{ fontSize: "1.2rem" }} />
          </div>
          {showBrands && (
            <div className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className=""
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <option
                  className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-400"
                  role="menuitem"
                >
                  Sản phẩm của shop
                </option>
                <option
                  className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-400"
                  role="menuitem"
                >
                  Câu chuyện thương hiệu
                </option>
                <option
                  className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-400"
                  role="menuitem"
                >
                  Thông tin liên hệ
                </option>
              </div>
            </div>
          )}
        </div>
        <span className="text-gray-800 rounded-md font-normal text-4sm">
          {product.brand}
          <button
            onClick={() => followBrand(product.brand)}
            className=" text-2sm ml-2 px-3 py-1 bg-yellow-300 text-black rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200"
          >
            + Theo dõi
          </button>
        </span>
      </div>
      <div className="bg-gray-100 p-3 rounded-md text-3sm">
        <span className="block">Mã nhóm: {product.groupCode}</span>
        <span className="block">Mã sản phẩm: {product.productCode}</span>
        <span className="block">Ciấy chứng nhận: {product.certificates}</span>
      </div>
    </div>
  );
};

export default BrandDetails;

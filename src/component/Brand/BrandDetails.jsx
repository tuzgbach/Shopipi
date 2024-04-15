import { FaChevronCircleDown } from "react-icons/fa";

const BrandDetails = ({ product }) => {
  const followBrand = (brand) => {
    console.log(`Following brand: ${brand}`);
  };

  return (
    <div className="text-sm xl:text-1xl flex place-items-start">
      <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer transition-colors duration-200">
        <FaChevronCircleDown style={{ fontSize: "1.2rem" }} />
      </div>
      <span className="text-gray-800 rounded-md text-4sm">
        {product.brand}
        <button
          onClick={() => followBrand(product.brand)}
          className="px-2 mt-2 py-1 bg-yellow-300 text-black rounded-md hover:bg-red-500 transition-colors duration-200"
        >
          Follow
        </button>
      </span>
      <div className="bg-slate-100 p-3 w-full rounded-md text-2sm">
        <span className="block">Mã nhóm: {product.groupCode}</span>
        <span className="block">Mã sản phẩm: {product.productCode}</span>
        <span className="block">Ciấy chứng nhận: {product.certificates}</span>
      </div>
    </div>
  );
};

export default BrandDetails;

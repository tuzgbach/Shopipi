import { Link } from "react-router-dom";
import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";
import { FaChevronCircleDown } from "react-icons/fa";
import Attribute from "./Attribute";

const ProductDetails = ({ product, ratings }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1 flex gap-5">
        {product.title}
        <div className="hover:bg-slate-500 cursor-pointer">
          <FaChevronCircleDown style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
      <div className="text-sm xl:text-base mb-1">
        by <span className="text-blue-500">{product.brand}</span>
      </div>
      {ratings && (
        <div className="text-sm xl:text-base mb-1">
          <ProductRatings
            avgRating={product.avgRating}
            ratings={product.ratings}
          />
        </div>
      )}
      <div className="font-normal text-1sm mb-3">
        <span className="font-semibold mr-3">
          <Attribute type={product.type} attribute={product.attribute} />
        </span>
      </div>
      <div className="text-1sm mb-1">
        <span className="text-white p-1 border rounded-md bg-slate-400">
          {product.badge}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;

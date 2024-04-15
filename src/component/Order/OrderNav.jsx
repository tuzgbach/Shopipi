import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { callAPI } from "../../utils/callAPI";
import { VN_CURRENCY } from "../../utils/constants";
import { addToCart } from "../../redux/cartSlice";

const OrderNav = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };
  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <div className="text-xs sm:text-sm font-light mb-2">
        <span className="text-gray-600">Giỏ hàng của bạn</span>
        <div className="flex flex-col items-start mt-2">
          {product && (
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-25 object-cover rounded mb-2"
              />
              <div className="ml-1">
                <span className="block font-medium text-sm text-gray-800 mb-8">
                  {product.title}
                </span>
                <span className="block font-semibold text-sm text-gray-800 mb-2">
                  <span className="text-3sm font-normal">Tổng: </span>
                  {product.price * quantity}
                  <a> đ</a>
                </span>
              </div>
              <div>
                <Link to={"/checkout"}>
                  <button
                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                    className="px-4 py-1 mb-5 bg-slate-200 text-black rounded-full hover:bg-slate-700 hover:text-white transition-colors duration-200"
                  >
                    Mua ngay
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <span className="font-light text-gray-600">Số lượng:</span>
          <select
            onChange={(e) => setQuantity(e.target.value)}
            className="p-2 w-16 bg-gray-100 border border-gray-300 rounded hover:border-blue-500 transition-colors duration-200"
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderNav;

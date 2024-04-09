import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { callAPI } from "../../utils/callAPI";
import { VN_CURRENCY } from "../../utils/constants";
import { addToCart } from "../../redux/cartSlice";
import ProductDetails from "./ProductDetails";
import CarouselProuduct2 from "../Carousel/CarouselProuduct2";

const ProductPage = () => {
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

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="bg-shopipi-background">
        <div className="min-w-[1000px] max-w-[1500px] m-5 p-5">
          <div className="grid grid-flow-col">
            {/* Left */}
            <div className="col-span-3 p-8 bg-white m-1">
              <img src={`${product.image}`} alt="Main product" />
            </div>
            {/* Middle */}
            <div className="col-span-5 p-4 bg-white divide-y divide-gray-400 m-1">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/* Right */}
            <div className="col-span-2 p-4 bg-white m-1">
              <div className="text-xl xl:text-2xl text-red-700 font-semibold mt-[2rem]">
                {VN_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-gray-500 font-semibold">
                <span className="line-through">
                  {VN_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-[3rem]">
                Miễn đổi trả
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                Không giao hàng
              </div>
              <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                Không khuyến mãi
              </div>
              <div className="text-base xl:text-lg mt-1">
                <span className="mr-5">
                  <a className="font-medium"> Số lượng:</a>
                </span>
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 w-[8rem] bg-white border rounded-md focus:border-indigo-600"
                >
                  {[...Array(5)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="button"
                >
                  Thêm giỏ hàng
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <CarouselProuduct2 />
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;

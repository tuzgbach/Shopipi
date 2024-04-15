import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { callAPI } from "../../utils/callAPI";
import { VN_CURRENCY } from "../../utils/constants";
import { addToCart } from "../../redux/cartSlice";
import ProductDetails from "./ProductDetails";
import CarouselProuduct2 from "../Carousel/CarouselProuduct2";
import BrandDetails from "../Brand/BrandDetails";
import OrderNav from "../Order/OrderNav";

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
  const ProductImage = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} />
  );

  const PriceCard = ({ platform, product }) => (
    <div className="p-2 m-1 bg-white border text-2sm hover:border hover:bg-slate-200">
      <span className="text-red-500 font-semibold mt-[1rem]">
        <a className="text-blue-500 font-normal text-1sm">{platform}:</a>
        {VN_CURRENCY.format(product.price)}
      </span>
      <span className="line-through">
        {VN_CURRENCY.format(product.oldPrice)}
      </span>
    </div>
  );
  const platforms = ["Amazon", "Tiki", "Shoppe", "Ebook"];

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
      <div className="bg-shopipi-background m-1 flex">
        <div className="m-5 p-5 md:min-w-[1000px] lg:max-w-[1490px]">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-flow-col ml-3">
            {/* Image product */}
            <div className="p-8 bg-white">
              <ProductImage
                src={product.image}
                alt="Main product"
                className="mb-4"
              />
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <ProductImage
                    key={i}
                    src={product.image_small}
                    alt={`Small product ${i}`}
                    className="w-full h-24"
                  />
                ))}
              </div>
            </div>
            {/* Information product */}
            <div className="p-4 bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base mt-3 text-1sm">
                {product.description}
              </div>
            </div>
            {/* Checkout Product */}
            <div className="p-3 ml-1 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
                {platforms.map((platform) => (
                  <PriceCard
                    key={platform}
                    platform={platform}
                    product={product}
                  />
                ))}
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-[1rem]">
                Mua bởi:
                <span className="p-2 m-1 bg-white border text-2sm hover:border hover:bg-slate-200">
                  Amazon
                </span>
              </div>
              <div className="text-sm font-semibold mt-8">
                Giao hàng từ: Việt Nam
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                Chính sách khuyến mãi
              </div>
              <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                Thông tin thêm
                <span className="ml-5">{product.badge}</span>
              </div>
              <div className="text-base xl:text-lg mt-4">
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
              <div className="text-lg font-bold mt-[2rem]">
                <span>Tổng giá: </span>
                <span>{VN_CURRENCY.format(product.totalPrice)}</span>
              </div>
              <div className="checkout m-4 p-3 mt-[1rem]">
                <Link to={"/checkout"}>
                  <button
                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                    className="button rounded-full"
                  >
                    Mua ngay
                  </button>
                </Link>
                <Link to={"/order"}>
                  <button
                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                    className="button rounded-full"
                  >
                    Thêm giỏ hàng
                  </button>
                </Link>
                <Link to={"/list"}>
                  <button
                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                    className="button rounded-full bg-white border hover:bg-gray-400"
                  >
                    Thêm vào list
                  </button>
                </Link>
              </div>
            </div>
            {/* Brand */}
            <div className="p-8 bg-white divide-y divide-gray-400 rounded-sm ml-5 mr-3">
              <div className="mb-3">
                <BrandDetails product={product} ratings={true} />
              </div>
              <div className="text-base text-2sm">
                <img
                  src={`${product.image_brand}`}
                  alt="return"
                  className="mr-3 mt-2 float-left w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3"
                />
                {product.description}
              </div>
            </div>
          </div>
          <CarouselProuduct2 />
        </div>
        {/* NavOrder */}
        <div className="bg-white w-[50%]">
          <OrderNav />
        </div>
      </div>
    )
  );
};

export default ProductPage;

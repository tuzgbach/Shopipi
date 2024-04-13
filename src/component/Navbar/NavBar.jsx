import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { MdOutlineCloudDownload } from "react-icons/md";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

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
    <header className="w-full bg-black">
      <div className="flex flex-col md:flex-row flex-wrap justify-between bg-amazonclone text-white h-[60px] px-5">
        {/* Left */}
        <div className="flex items-center space-x-4 md:space-x-0 md:mx-4">
          <Link to={"/"} className="focus:outline-white">
            <img
              className="h-[35px] w-[100px]"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="hidden md:flex md:items-start mb-2">
            <span className="ml-8 mt-4">
              <MdOutlineCloudDownload size={25} />
            </span>
            <div className="text-1sm">
              <span className="mt-1 flex ml-3">Tải ứng dụng</span>
              <div className="text-1sm font-bold ml-3">Việt Nam</div>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex-1 md:flex-none md:w-1/2 md:mt-0 m-3">
          <Search />
        </div>
        {/* Right */}
        <div className="flex flex-col-3 md:flex-row items-center space-x-4 md:space-x-0 md:mx-1 mt-2 md:mt-0">
          <div className="hidden md:flex md:flex-col md:items-start md:space-y-1 mr-[2rem] hover:border hover:border-white focus:border-white">
            <div className="text-1sm">Hello, đăng nhập</div>
            <div className="text-1sm font-bold">Tài khoản & Lựa chọn</div>
          </div>
          <div className="hidden md:flex md:flex-col md:items-start md:space-y-1 mr-[2rem] hover:border hover:border-white focus:border-white">
            <div className="text-1sm">Giỏ hàng</div>
            <div className="text-1sm font-bold">& Thanh toán</div>
          </div>
          <div className="mr-[1rem]">
            <Link to={"/checkout"}>
              <div className="flex items-center mr-3 ml-4 m-1 hover:border hover:border-white">
                <ShoppingCartIcon className="size-10" />
                <div className="relative mb-[3rem]">
                  <div className="absolute right-[12px] font-bold mt-2 text-orange-400">
                    1
                  </div>
                </div>
                <div className="mt-5 text-1sm font-bold hover:text-white">
                  Cart
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-1 bg-slate-900 text-white space-x-3 text-xs xl:text-sm p-1 pl-6 cursor-pointer">
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </header>
  );
};

export default NavBar;

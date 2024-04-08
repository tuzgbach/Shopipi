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
    <header className="min-w-[1000px] bg-black">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm flex gap-3">
              <span className="mt-2"> Tải ứng dụng</span>
              <MdOutlineCloudDownload size={35} />
            </div>
            <div className="text-sm xl:text-base font-bold">Việt Nam</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-sm">Hello, đăng nhập</div>
            <div className="text-sm font-bold">Tài khoản & Lựa chọn</div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Kho bãi</div>
            <div className="text-sm font-bold">& Giỏ hàng</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="size-10" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400"></div>
              </div>
              <div className="mt-5 text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 cursor-pointer">
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </header>
  );
};

export default NavBar;

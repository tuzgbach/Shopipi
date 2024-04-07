import React from "react";
import { IoIosArrowUp } from "react-icons/io";

function Top() {
  return (
    <div className="fixed bottom-10 right-0 flex justify-end cursor-pointer mr-8 mb-10">
      <div className="flex justify-center items-center h-11 w-11 bg-white rounded-full shadow cursor-pointer opacity-100 visible">
        <a className="hover:text-blue-500">
          <span>
            <IoIosArrowUp className="ml-2" />
            TOP
          </span>
        </a>
      </div>
    </div>
  );
}

export default Top;

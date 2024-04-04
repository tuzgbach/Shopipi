import React, { useState } from "react";

const Button = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-white m-3">
      <div className="mb-2 text-sm font-normal text-gray-700 mt-3">
        Đăng nhập để nâng cao trải nghiệm mua sắm của bạn
      </div>
      <div className="px-[5rem] py-1 bg-yellow-400 text-white mb-4">
        <span className="relative block text-center text-white font-extrabold text-sm">
          {children}
        </span>
      </div>
      <div className="mb-2 text-sm font-light text-gray-700 flex items-center">
        Bạn chưa có tài khoản?&nbsp;
        <div className="text-blue-500 hover:text-blue-700">Đăng ký ngay.</div>
      </div>
    </div>
  );
};

export default Button;

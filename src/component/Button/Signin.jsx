import React from "react";

const Signin = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="mb-2 text-sm font-light text-gray-700">
        See personalized recommendations
      </div>
      <div className="px-[5rem] py-1 bg-yellow-400 text-white mb-4">
        <span className="relative block text-center text-white font-extrabold text-sm">
          Sign in
        </span>
      </div>
      <div className="mb-2 text-sm font-light text-gray-700 flex items-center">
        New customer?&nbsp;
        <div className="text-blue-500 hover:text-blue-700">Start here.</div>
      </div>
    </div>
  );
};

export default Signin;

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex justify-center items-center h-16 p-2">
        <p>
          <b>Disclaimer:</b> This Amazon clone project is a mere simulation and
          is not affiliated with Amazon in any way.
        </p>
      </div>
      <div className="bg-gray-200">
        <div className="flex justify-around items-center pt-12 pb-12 text-gray-600">
          <div className="cursor-pointer flex flex-col text-left">
            <p className="font-semibold text-black">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>Amazon Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="cursor-pointer flex flex-col text-left">
            <p className="font-semibold text-black">About Amazon</p>
            <p>Sell products on Amazon</p>
            <p>Amazon Business Card</p>
            <p>Amazon and COVID-19</p>
          </div>
          <div className="cursor-pointer flex flex-col text-left">
            <p className="font-semibold text-black">Connect with Us</p>
            <p>Sell apps on Amazon</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="cursor-pointer flex flex-col text-left">
            <p className="font-semibold text-black">Amazon Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full text-gray-600 relative pb-8 pt-8">
          <div className="flex relative -bottom-2 ml-4 items-center">
            <p>&copy; 2023 | Developed by TungBach</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

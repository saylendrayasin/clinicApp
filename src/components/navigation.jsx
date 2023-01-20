import React from "react";
import Logo from "../img/Logo.png";

const navigation = () => {
  return (
    <div className="flex justify-between items-center px-6 py-6 sm:px-16 sm:py-10 z-10">
      <div className="flex justify-center gap-2 items-center ">
        <img src={Logo} alt="logos" className="w-16 h-16 sm:w-24 sm:h-24" />
        <h1 className="sm:text-3xl font-semibold">Medical</h1>
      </div>
      <ul className="hidden md:flex md:gap-7 lg:gap-11 md:text-xl font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="flex md:hidden">
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default navigation;

import React from "react";
import OvalTop from "../img/Oval.png";
import OValRight from "../img/Oval1.png";

const wrapper = () => {
  return (
    <div className="container">
      <div className="basis-1/3"></div>
      <div className="relative basis-2/3 -z-10">
        <img
          src={OvalTop}
          alt="logo"
          className="lg:w-[1000px] md:w-[520px] w-[300px] lg:h-[300px] md:h-[200px] h-[100px] absolute right-0"
        />
        <img
          src={OValRight}
          alt="logo"
          className="lg:w-[600px] md:w-[350px] w-[200px] lg:h-[800px] md:h-[500px] h-[300px]  absolute right-0"
        />
      </div>
    </div>
  );
};

export default wrapper;

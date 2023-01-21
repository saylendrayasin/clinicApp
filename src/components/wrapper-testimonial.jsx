import React from "react";
import OvalanRactangle from "../img/Services.svg";
// import Dots from "../img/Dots.svg";

const wrapperTestimoni = () => {
  return (
    <div className=" relative mt-16 lg:mt-36 ">
      <img
        src={OvalanRactangle}
        alt="logo"
        className="overflow-hidden w-60 h-72 md:w-[300px] md:h-[350px] lg:w-[500px] lg:h-[700px] absolute right-0 -top-20 md:-top-28 lg:right-0 lg:-top-64 -z-10"
      />
    </div>
  );
};

export default wrapperTestimoni;

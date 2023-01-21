import React from "react";
import OvalanRactangle from "../img/Services.svg";
// import Dots from "../img/Dots.svg";

const services = () => {
  return (
    <div className="relative mt-16 lg:mt-0 ">
      {/* <img
        src={Dots}
        alt="Dots"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-96 opacity-50 lg:absolute lg:left-16 lg:-top-36"
      /> */}
      <svg
        className="absolute lg:absolute transform translate-y-1/4 translate-x-1 lg:translate-x-1/4 -top-20 md:-top-32 lg:-top-64 left-8 md:left-16 lg:left-0 w-[200px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[380px] lg:h-[500px]"
        // width="404"
        // height="500"
        fill="none"
        // viewBox="0 0 404 504"
      >
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x="10"
            y="10"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="10"
              y="10"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          className="overflow-hidden w-36 h-48 md:w-80 md:h-72 lg:w-96 lg:h-96"
          // width="404"
          // height="500"
          fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
        />
      </svg>
      <img
        src={OvalanRactangle}
        alt="logo"
        className="overflow-hidden w-60 h-72 md:w-[300px] md:h-[350px] lg:w-[500px] lg:h-[700px] absolute right-0 -top-20 md:-top-28 lg:right-0 lg:-top-64 -z-10"
      />
    </div>
  );
};

export default services;

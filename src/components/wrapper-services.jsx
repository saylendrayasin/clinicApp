import React from "react";
import OvalanRactangle from "../img/Services.svg";
// import Dots from "../img/Dots.svg";

const services = () => {
  return (
    <div className="container relative ">
      {/* <img
        src={Dots}
        alt="Dots"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-96 opacity-50 lg:absolute lg:left-16 lg:-top-36"
      /> */}
      <svg
        class="absolute transform translate-y-1/4 translate-x-1 lg:translate-x-1/4 lg:-top-60"
        width="404"
        height="500"
        fill="none"
        viewBox="0 0 404 504"
      >
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="500"
          fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
        />
      </svg>
      <img
        src={OvalanRactangle}
        alt="logo"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[700px] lg:absolute lg:right-0 lg:-top-20 -z-10"
      />
    </div>
  );
};

export default services;

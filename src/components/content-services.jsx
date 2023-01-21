/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import data from "../data/services.js";
import { useRef, useEffect, useState } from "react";

const contentServices = () => {
  const [Width, SetWidth] = useState(0);
  const sliderContainer = useRef();
  const slider = document.getElementById("slider");

  useEffect(() => {
    console.log(
      sliderContainer.current.scrollWidth,
      sliderContainer.current.offsetWidth
    );
    SetWidth(
      sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth
    );
  }, []);

  //make next slider onclik function to get value of transiotion x
  const nextSlider = () => {
    const constrains = sliderContainer.current.scrollWidth;
    const valueNext = sliderContainer.current.scrollWidth * 0.2;

    let valueCurrent = slider.style.transform;
    valueCurrent = valueCurrent.replace("translateX(-", "");
    valueCurrent = valueCurrent.replace("px )", "");
    valueCurrent = parseInt(valueCurrent);
    console.log(valueCurrent);

    let change = (valueCurrent += valueCurrent);

    if (!valueCurrent) {
      slider.style.transform = "translateX(-" + valueNext + "px )";
    } else if (valueCurrent >= constrains) {
      slider.style.transform = "translateX(-" + constrains + "px )";
    } else {
      slider.style.transform = "translateX(-" + change + "px )";
    }

    return valueCurrent === slider.style.transform;
  };

  //make previous slider onclik function
  const prevSlider = () => {
    const valueNext = sliderContainer.current.scrollWidth * 0.2;
    console.log(valueNext);

    let valueCurrent = slider.style.transform;
    valueCurrent = valueCurrent.replace("translateX(-", "");
    valueCurrent = valueCurrent.replace("px )", "");
    valueCurrent = parseInt(valueCurrent);
    // console.log(valueCurrent);

    let change = (valueCurrent -= valueNext);
    // let backtoBefore = (valueCurrent -= valueCurrent);

    if (!valueCurrent) {
      slider.style.transform = "translateX(0px)";
    } else if (valueCurrent <= 0) {
      slider.style.transform = "translateX(0px)";
    } else {
      slider.style.transform = "translateX(-" + change + "px )";
    }

    return valueCurrent === slider.style.transform;
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <motion.div
        id="sliderContainer"
        ref={sliderContainer}
        className="w-3/4 overflow-hidden z-50 cursor-grab mt-16 lg:mt-0"
      >
        <motion.ul
          drag="x"
          dragConstraints={{ left: -Width, right: 0 }}
          id="slider"
          className="flex w-full "
        >
          {data.map((item) => {
            return (
              <motion.li
                key={item.id}
                className="lg:min-w-[24rem] md:min-w-[20rem] min-w-[18rem] p-5 md:ml-6"
              >
                <div className=" bg-blue-300 rounded-lg p-5">
                  <img
                    className="h-25 md:h-30 lg:h-50 lg:w-full object-cover rounded-md"
                    src={item.image}
                    alt={item.alt}
                  />
                  <h2 className="mt-2 text-xl md:text-2xl lg:text-2xl font-bold text-gray-700">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-md md:text-lg lg:text-lg text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <div className="w-1/4 lg:relative lg:mt-0 ">
        {/* make button for next the contentSlider carousel */}

        <button
          className="bg-white rounded-full p-2 shadow-lg  lg:absolute  lg:right-28 lg:bottom-0 transform -translate-y-1/2"
          onClick={nextSlider}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-300 hidden lg:flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* make button for previous the contentSlider carousel */}
        <button
          className="bg-white rounded-full p-2 shadow-lg   lg:absolute  lg:left-28 lg:bottom-0 transform -translate-y-1/2"
          onClick={prevSlider}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-300 hidden lg:flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default contentServices;

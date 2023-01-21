/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import data from "../data/services.js";
import { useRef, useEffect, useState } from "react";

const contentServices = () => {
  const [Width, SetWidth] = useState(0);

  const sliderContainer = useRef();

  useEffect(() => {
    console.log(
      sliderContainer.current.scrollWidth,
      sliderContainer.current.offsetWidth,
      sliderContainer.current.scrollOffset
    );
    SetWidth(
      sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth
    );
  }, []);

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
                <div className=" bg-white rounded-lg p-5">
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
      <div className="w-1/4">World</div>
    </div>
  );
};

export default contentServices;

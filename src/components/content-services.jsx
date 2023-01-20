/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import data from "../data/services.js";
import { useRef, useEffect, useState } from "react";

const contentServices = () => {
  const [Width, SetWidth] = useState(0);

  const sliderContainer = useRef();

  // useEffect(() => {
  //   console.log(
  //     sliderContainer.current.scrollWidth,
  //     sliderContainer.current.offsetWidth,
  //     sliderContainer.current.scrollOffset
  //   );
  //   SetWidth(sliderContainer.current.scrollWidth);
  // }, []);

  //make use effect for sliderContainer and sliderContainer with scroll
  useEffect(() => {
    // console.log(sliderContainer.current.scrollWidth);
    // SetWidth(sliderContainer.current.scrollWidth);

    //make restiction for sliderContainer base on user devices screen
    if (window.innerWidth < 768) {
      SetWidth(sliderContainer.current.scrollWidth);
    } else {
      SetWidth(sliderContainer.current.scrollWidth);
    }
  }, []);

  return (
    <div className="flex flex-row ">
      <motion.div
        id="sliderContainer"
        ref={sliderContainer}
        className="w-3/4 overflow-hidden z-50 cursor-grab"
      >
        <motion.ul
          drag="x"
          dragConstraints={{ left: 0, right: 1324 }}
          id="slider"
          className="flex flex-row-reverse w-full border border-red-500"
        >
          {data.map((item) => {
            return (
              <motion.li key={item.id} className="min-w-[20rem] p-5">
                <div className=" bg-white rounded-lg p-5">
                  <img
                    className="h-50 w-full object-cover rounded-md"
                    src={item.image}
                    alt={item.alt}
                  />
                  <h2 className="mt-2 text-2xl font-bold text-gray-700">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-500">{item.description}</p>
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

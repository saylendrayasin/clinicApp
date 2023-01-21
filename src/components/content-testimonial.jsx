/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import data from "../data/testimoni.js";
import { useRef, useEffect, useState } from "react";

const contentTestimoni = () => {
  const [Width, SetWidth] = useState(0);

  const sliderContainer = useRef();

  useEffect(() => {
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
              <motion.li key={item.id} className="p-5 md:ml-6 gap-20">
                <div className="relative">
                  <div className=" bg-yellow-500 pl-4 pr-16 pt-2 lg:pt-6 pb-10 w-60 h-60 md:w-80 md:h-80 rounded-r-full rounded-tr-full rounded-b-full flex flex-col">
                    <div className="w-full overflow-y-auto scrollbar-hide basis-2/4">
                      <p className="mt-0 text-sm md:text-base lg:text-base text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="basis-1/5 w-full flex mt-3 lg:mt-4 lg:gap-1">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <div className="basis-1/3 w-full flex flex-col pl-6 pr-3 ">
                      <h2 className="text-sm md:text-base lg:text-base font-bold text-gray-700 flex justify-end ">
                        {item.name}
                      </h2>
                      <p className="font-bold text-sm md:text-base lg:text-base text-gray-600 flex justify-end">
                        {item.job}
                      </p>
                      {/* <h2 className="text-base md:text-lg lg:text-base font-bold text-gray-700  absolute right-4 bottom-5 pl-6">
                        {item.name}
                      </h2>
                      <p className="font-bold text-sm md:text-base lg:text-base text-gray-600 absolute right-4 bottom-0">
                        {item.job}
                      </p> */}
                    </div>
                  </div>
                  {/* <div className="absolute w-[74px] h-[70px] bottom-5 -right-5 z-10"> */}
                  <img
                    src="https://picsum.photos/200/300"
                    alt=" "
                    className="absolute rounded-l-full rounded-t-full w-24 h-24 -bottom-2 -right-6"
                  />
                  {/* </div> */}
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

export default contentTestimoni;

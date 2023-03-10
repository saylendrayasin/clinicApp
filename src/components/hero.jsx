import React from "react";
import Mask from "../img/Mask.png";

const hero = () => {
  return (
    <div className="container mt-10 flex flex-col lg:flex-row px-6 py-6 sm:px-16 sm:py-10">
      <div className="lg:basis-2/5 lg:mt-14">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-6">
          Medical Clinic Name
        </h1>
        <p className="text-2xl md:text-3xl lg:text-3xl">
          Your health and wellbeing is important for us.
        </p>
      </div>
      <div className="lg:basis-3/5 flex lg:relative mt-12 lg:mt-0 justify-center">
        <img
          src={Mask}
          alt="logo"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex lg:absolute lg:right-44"
        />
      </div>
    </div>
  );
};

export default hero;

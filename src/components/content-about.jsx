import React from "react";
import Aboutimg from "../img/About.png";
import OvalLeft from "../img/Oval2.png";
import Aboutcontent from "../img/AboutContent.svg";

const componentAbout = () => {
  return (
    <div className=" flex flex-col lg:flex-row mt-16 lg:mt-0">
      <div className="lg:basis-1/2 flex  justify-center lg:justify-start">
        <img
          src={OvalLeft}
          alt="logo"
          className="lg:w-[500px] md:w-[350px] w-[200px] lg:h-[700px] md:h-[500px] h-[300px] hidden lg:flex "
        />
        <img
          src={Aboutimg}
          alt="AboutPicture"
          className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 lg:static lg:mt-48 lg:-ml-[400px] "
          // className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 lg:absolute lg:left-0 top-96"
        />
      </div>
      <div className="lg:basis-2/3 flex justify-center flex-col px-6 py-6 md:px-16 md:py-10 lg:px-16 lg:py-0 mt-10 lg:mt-0">
        <h1 className="text-4xl font-bold">Kontol</h1>
        <img
          src={Aboutcontent}
          alt="AboutContent"
          className="lg:w-[500px] lg:h-[200px] w-[300px] h-[100px]"
        />
        <h3 className="text-2xl">
          Aliquam lobortis magna neque, gravida consequat velit venenatis at.
          Pellentesque ac bibendum tortor, vel blandit nulla.
        </h3>
      </div>
    </div>
  );
};

export default componentAbout;

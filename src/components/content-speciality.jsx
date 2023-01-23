import React from "react";
import Speciality from "../img/Speciality.svg";

const contentSpeciality = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16 lg:mt-22">
      <div className="flex justify-center">
        <img src={Speciality} alt="Speciality" className="w-[600px]" />
      </div>
      <div className="lg:basis-2/3 flex justify-center flex-col px-6 py-6 md:px-16 md:py-10 lg:px-16 lg:py-0 mt-10 lg:mt-0 ">
        <h1 className="text-4xl lg:text-5xl font-semibold p-2">
          Nulla lobortis nunc vitae nisi semper semper velit
        </h1>
        <h3 className="text-xl lg:text-2xl p-2 mt-6">
          Aliquam lobortis magna neque, gravida consequat velit venenatis at.
          Pellentesque ac bibendum tortor, vel blandit nulla.
        </h3>
        <div className="flex flex-row gap-6 p-2 mt-10 flex-wrap">
          <h1 className="border-2 border-slate-400 rounded-full text-lg md:text-xl px-8 md:px-10 py-2 bg-primary text-white">
            Orthopedy
          </h1>
          <h1 className="border-2 border-slate-400 rounded-full text-lg md:text-xl px-8 md:px-10 py-2">
            Content
          </h1>
          <h1 className="border-2 border-slate-400 rounded-full text-lg md:text-xl px-8 md:px-10 py-2">
            Pharmacy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default contentSpeciality;

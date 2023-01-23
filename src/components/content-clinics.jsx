/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import OvalLeft from "../img/Oval2.png";

const contentClinics = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16 lg:mt-10">
      <div className="lg:basis-1/3 flex lg:justify-start">
        <div className="hidden lg:flex">
          <img
            src={OvalLeft}
            alt="logo"
            className="lg:w-[500px] md:w-[350px] w-[200px] lg:h-[700px] md:h-[500px] h-[300px] lg:absolute -z-10"
          />
        </div>
        <div className="mt-16 px-6 py-6 md:px-16 md:py-10 z-10">
          <h1 className="text-4xl font-bold ">Our Clinics</h1>
          <h3 className="mt-12 text-xl font-semibold">
            Bibendum Medical Center
          </h3>
          <div className="mt-6 flex gap-4 justify-center">
            <div className="flex flex-col items-center gap-2 text-blue-400">
              <i className="fa fa-phone text-xl  "></i>
              <i className="fa fa-envelope text-lg"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base">+62 21 12345678</h3>
              <h3 className="text-base">example@gmail.com</h3>
              <h3 className="text-base">
                Vivamus street Block C - Vestibulum Building - 3rd Floor
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:basis-2/3  lg:mt-16 px-6 md:px-16 lg:px-10">
        <iframe
          className="lg:w-full w-full lg:h-[750px] md:h-[650px] h-[500px] border mt-10 rounded-xl shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.481134186538!2d125.0778979!3d1.4834371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287073d89b3f66f%3A0xe7ce8484db08096d!2sKlinik%20Bidan%20Iya!5e0!3m2!1sen!2sid!4v1674393413024!5m2!1sen!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contentClinics;

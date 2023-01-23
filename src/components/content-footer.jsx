import React from "react";
import Logo from "../img/Logo.png";
const contentFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-28 px-6 py-6 md:px-16 md:py-10  gap-10 lg:gap-0">
      <div className=" lg:w-1/4">
        <div className="flex flex-row items-center">
          <img
            src={Logo}
            alt="logos"
            className="w-14 h-14 md:w-14 md:h-14 opacity-80"
          />
          <h1 className="ml-4 text-lg font-semibold text-slate-600">
            Medical Clinics
          </h1>
        </div>
        <h3 className="text-sm mt-4 text-slate-600">
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </h3>
        <h3 className="text-sm mt-6 text-slate-600">© saylendrayasin 2023</h3>
      </div>
      <div className="flex flex-wrap lg:ml-12 lg:w-2/4 gap-12">
        <div className="">
          <h1 className="text-lg font-semibold text-primary">Services</h1>
          <ul className="mt-4 text-sm text-slate-600">
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold text-primary">Services</h1>
          <ul className="mt-4 text-sm text-slate-600">
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold text-primary">Services</h1>
          <ul className="mt-4 text-sm text-slate-600">
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
            <li className="mt-2">Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/4">
        <div className="flex-row flex gap-2">
          <i className="border-2 rounded-full w-12 h-12 flex flex-row items-center justify-center full fa fa-facebook text-3xl text-primary font-bold"></i>
          <i className="border-2 rounded-full w-12 h-12 flex flex-row items-center justify-center  full fa fa-whatsapp text-3xl text-primary font-bold"></i>
          <i className="border-2 rounded-full w-12 h-12 flex flex-row items-center justify-center  full fa fa-twitter text-3xl text-primary font-bold"></i>
          <i className="border-2 rounded-full w-12 h-12 flex flex-row items-center justify-center  full fa fa-instagram text-3xl text-primary font-bold"></i>
        </div>
        <h1 className="mt-6 text-xl font-semibold text-primary">
          Indonesia - ID
        </h1>
      </div>
    </div>
  );
};

export default contentFooter;

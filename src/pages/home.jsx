import React from "react";
import Nav from "../components/navigation";
import Hero from "../components/hero";
import Wrapper from "../components/wrapper-header";

const home = () => {
  return (
    <div>
      <Wrapper />
      <Nav />
      <Hero />
    </div>
  );
};

export default home;

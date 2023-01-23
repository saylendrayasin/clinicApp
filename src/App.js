import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Testimoni from "./pages/testimoni";
import Speciality from "./pages/speciality";
import Clinic from "./pages/clinics.jsx";
import Footer from "./pages/footer.jsx";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Speciality />
      <Testimoni />
      <Clinic />
      <Footer />
    </div>
  );
}

export default App;

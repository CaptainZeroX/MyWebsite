import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { About, Hero, Tech, Splash, Contact, Navbar} from "./components"
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import About from "./components/About";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black ">
        <div className=" bg-secondary bg-cover bg-no-repeat bg-center">
          {" "}
          {/*bg-gradient-to-b from-[#210B21]*/}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

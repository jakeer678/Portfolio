import React, { Fragment } from "react";
// import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
// import Navbar from "../Header/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
// import Nopage from "../Pages/Nopage";

import Services from "../Pages/Services";
import Sidebar from "../Header/Sidebar";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";

const RouteApp = () => {
  return (
    <Fragment>
      <Home />
      <Sidebar />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </Fragment>
  );
};
export default RouteApp;

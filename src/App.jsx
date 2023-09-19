import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import GetStart from "./components/getStart/GetStart";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStart/>
      <Footer/>
    </div>
  );
}

export default App;

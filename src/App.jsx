import React from "react";
import Navbar from "../src/components/navbar/Navbar";
import Banner from "../src/components/banner/Banner";
import Skills from "../src/components/skills/Skills";
import Project from "../src/components/projects/Project";
import Resume from "../src/components/resume/Resume";
import GitStatus from "../src/components/gitstatus/GitStatus";
import Contact from "../src/components/contacts/Contact";
import Footer from "../src/components/footer/Footer";
import FooterBottom from "../src/components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-2">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">
        <Banner />
        <Skills />
        <Project />
        <Resume />
        <GitStatus />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;

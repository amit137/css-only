import { useRef } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <section id="Homepage">
        <Navbar />
        <Hero />{" "}
      </section>
     
      <section id="Services" >
        <Services />
      </section>
      <section id="Portfolio">
        {/* <Projects /> */}
        <Works/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

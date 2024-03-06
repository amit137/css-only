import React from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";
import AboutMe from "./components/aboutMe/AboutMe";
import Sidebar from "./components/sidebar/Sidebar";
import Projects from "./components/projects/Projects";
import Parallax from "./components/parallax/Parallax";
import Articles from "./components/articles/Articles";
import Cubes from "./components/cubes/Cubes";

function App() {
  return (
    <div className="App">
      <Sidebar />
     
        <section id="Homepage">
        
          <Hero />
         
        </section>
     
        <section id="AboutMe">
          <AboutMe />
        </section>
       
        <section id="projects">
          <Projects />
        </section>
       
        <section id="articles">
          <Articles />
        </section>
        <section id="Contact">
          <Contact />
        </section>
  
    </div>
  );
}

export default App;

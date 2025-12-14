import Navbar from "./components/navbar";
import Footer from "./components/footer";

import React,{createContext} from "react";
import useIsMobile from "./hooks/useIsMobile.js";


import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skill";
import Projects from "./pages/Project";
import Experience from "./pages/Experiemce";
import Contact from "./pages/Contact";




// Global device context
export const DeviceContext = createContext();



function App() {

  const isMobile = useIsMobile(); // <-- Hook used once ONLY here


  return (
    <div className="bg-[#050505] min-h-screen scroll-smooth">
      {/* NAVBAR */}
      <Navbar />

      {/* SECTIONS */}
      <Home />
        
        <About />
        <Skills/>
        <Projects/>
      
      {/* <Experience/> */}
      <Contact/>
      
{/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}

<Footer/>
  
    </div>
  );
}

export default App;
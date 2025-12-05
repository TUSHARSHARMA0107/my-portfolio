import Navbar from "./components/navbar";
import Footer from "./components/footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skill";
import Projects from "./pages/Project";
import Experience from "./pages/Experiemce";
import Contact from "./pages/Contact";

function App() {
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
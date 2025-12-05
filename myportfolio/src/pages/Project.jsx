import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { projectsData } from "../components/projectt/projectData";
import ProjectCard from "../components/projectt/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-white bg-project-grid py-28 px-6  ">
      
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6"
      >
        My <span className="text-[#6ACBFF]">Projects</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
      >
        A showcase of applications I’ve built using modern technologies,
        clean design, and solid engineering principles.
      </motion.p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* VIEW MORE ON GITHUB BUTTON */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex justify-center mt-14"
>
  <a
    href="https://github.com/TUSHARSHARMA0107"
    target="_blank"
    className="
      flex items-center gap-3
      px-6 py-3 
      rounded-xl
      bg-transparent
      border border-white/10
      text-gray-200
      backdrop-blur-none

      hover:border-[#6ACBFF]/40
      hover:shadow-[0_0_30px_rgba(106,203,255,0.35)]
      hover:text-white

      transition-all duration-300
      text-lg
    "
  >

<FaGithub className="text-xl text-[#6ACBFF]"/>
    View More on GitHub
  </a>
</motion.div>

    </section>
  );
}
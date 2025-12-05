import { motion } from "framer-motion";
import { skillsData } from "../components/skill/skillsData";
import SkillCard from "../components/skill/Skillcard";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0b0b0b] text-white  bg-project-spotlight  py-28 px-6 ">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6"
      >
        <span className="text-white">My </span>
        <span className="text-[#6ACBFF]">Skills</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
      >
        A collection of my technical skills and tools that I use to build
        modern, scalable and production–ready applications.
      </motion.p>

      {/* GRID OF CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <SkillCard title="Frontend" items={skillsData.frontend} />
        <SkillCard title="Backend" items={skillsData.backend} />
        <SkillCard title="Languages" items={skillsData.languages} />
        <SkillCard title="Tools" items={skillsData.tools} />
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { experienceData } from "../components/experience/experienceData";
import ExperienceCard from "../components/experience/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 text-white relative">

      {/* GLOWING VERTICAL TIMELINE LINE */}
      <div className="
        absolute left-9 top-0 bottom-0 
        w-[3px]
        bg-gradient-to-b from-[#6ACBFF] to-transparent
        shadow-[0_0_25px_#6ACBFF]
      "></div>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6"
      >
        My <span className="text-[#6ACBFF]">Experience</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
      >
        A journey of roles, skills, contributions and real-world engineering.
      </motion.p>

      {/* EXPERIENCE LIST */}
      <div className="max-w-4xl mx-auto space-y-14 relative z-10">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>

    </section>
  );
}
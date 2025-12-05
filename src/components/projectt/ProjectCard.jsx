import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        rounded-3xl overflow-hidden
        bg-transparent backdrop-blur-none
        border border-white/10
        shadow-[0_0_25px_rgba(255,255,255,0.08)]
        hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="w-full aspect video overflow-hidden rounded -x1 border-white/10">
        <img
          src={project.image}
          className="w-full h-full  hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="p-6">
        {/* TITLE */}
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mb-4">
          {project.description}
        </p>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="
                px-3 py-1 rounded-xl text-sm
                bg-white/5 border border-white/10
                text-gray-200
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            className="
              flex items-center gap-2 px-4 py-2
              bg-white/10 border border-white/20 rounded-xl
              hover:bg-white/20 transition-all
            "
          >
            <FiExternalLink className="text-[#6ACBFF]" />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="
              flex items-center gap-2 px-4 py-2
              bg-white/10 border border-white/20 rounded-xl
              hover:bg-white/20 transition-all
            "
          >
            <FiGithub className="text-[#6ACBFF]" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
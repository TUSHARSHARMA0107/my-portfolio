import { motion } from "framer-motion";

export default function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="
        relative pl-14
      "
    >
      {/* TIMELINE DOT */}
      <div className="
        absolute left-0 top-5
        w-5 h-5 rounded-full
        bg-[#6ACBFF]
        shadow-[0_0_20px_#6ACBFF]
      "></div>

      {/* CARD */}
      <div
        className="
          rounded-3xl p-8
          bg-transparent
          border border-white/10
          backdrop-blur-none
      
          hover:border-[#6ACBFF]/40
          hover:shadow-[0_0_45px_rgba(106,203,255,0.25)]
          transition-all duration-300
        "
      >
        <div className="flex items-start gap-6">

          {/* LOGO with Glow Ring */}
          <div className="relative">
            <div className="
              absolute inset-0 
              rounded-full
              blur-xl
              bg-[#6ACBFF]/30
            "></div>
            <img
              src={exp.logo}
              className="relative w-16 h-16 rounded-full border border-white/20 shadow-xl"
            />
          </div>

          <div>
            {/* ROLE */}
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>

            {/* COMPANY / DURATION */}
            <p className="text-[#6ACBFF] font-medium">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 rounded-xl text-sm
                    bg-transparent
                    border border-white/10
                    text-gray-200
                    hover:border-white/20
                    transition
                  "
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        p-8 rounded-3xl

        /* ZERO TINT — PURE TRANSPARENT */
        bg-transparent

        /* NO BLUR (background fully visible) */
        backdrop-blur-none

        /* Very light border and soft glow */
        border border-white/10
        shadow-[0_0_15px_rgba(106,203,255,0.08)]

        hover:shadow-[0_0_25px_rgba(106,203,255,0.15)]
        transition-all duration-300
      "
    >
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold text-white mb-6"
      >
        {title}
      </motion.h3>

      <div className="flex flex-wrap gap-4">
        {items.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.07,
            }}
            className="
              flex items-center gap-3
              px-4 py-2 rounded-xl

              /* PURE TRANSPARENT CHIP */
              bg-transparent
              backdrop-blur-none

              border border-white/10
              hover:border-white/20

              hover:scale-110
              transition-all duration-300
            "
          >
            <img src={skill.icon} className="w-6 h-6" />
            <span className="text-gray-200">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
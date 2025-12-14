import { motion } from "framer-motion";
import { FiCode, FiServer, FiCpu, FiZap, FiSend } from "react-icons/fi";

export default function AboutMainCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        p-12 rounded-3xl
        backdrop-blur-2xl 
        bg-white/10 dark:bg-white/5
        border border-white/20 
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        hover:shadow-[0_15px_60px_rgba(0,0,0,0.60)]
        transition-all duration-300
      "
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* ---------------- LEFT TEXT ---------------- */}
        <div className="space-y-6">

          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ACBFF] to-[#A5B8FF]">
              About Me
            </span>
          </h3>

          {/* NEW About Me TEXT */}
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a developer who focuses on creating clean, modern and meaningful
            digital experiences. Rather than just building interfaces, I aim to build
            systems that feel smooth, intuitive and professionally crafted.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I enjoy exploring new technologies and improving my workflow to build
            better products every day. Clean structure, performance and design are 
            central to my work.
          </p>

          {/* ---------------- CONNECT BUTTON (LIGHT GLOW) ---------------- */}
          <a
            href="#contact"
            className="
              inline-flex items-center gap-3 mt-4 px-8 py-3 
              rounded-xl font-semibold text-lg
              border border-white/30
              bg-white/10 backdrop-blur-xl 
              hover:bg-white/20 hover:border-white/40
              transition-all duration-300
              relative
              shadow-[0_0_12px_rgba(106,203,255,0.15)]
              hover:shadow-[0_0_20px_rgba(106,203,255,0.25)]
            "
          >
            <FiSend className="text-xl text-[#6ACBFF]" />
            Connect
          </a>

        </div>

        {/* ---------------- RIGHT ICON LIST ---------------- */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center"
          >
            <FiCode className="text-4xl text-[#6ACBFF]" />
            <div>
              <h4 className="text-xl font-semibold text-gray-200">Frontend Development</h4>
              <p className="text-gray-400">Interactive Design, UI/UX thinking</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center"
          >
            <FiServer className="text-4xl text-[#6ACBFF]" />
            <div>
              <h4 className="text-xl font-semibold text-gray-200">Backend Engineering</h4>
              <p className="text-gray-400">Try focusing on stablility</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center"
          >
            <FiCpu className="text-4xl text-[#6ACBFF]" />
            <div>
              <h4 className="text-xl font-semibold text-gray-200">System Thinking</h4>
              <p className="text-gray-400">Architecture & Problem solving</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center"
          >
            <FiZap className="text-4xl text-[#6ACBFF]" />
            <div>
              <h4 className="text-xl font-semibold text-gray-200">Performance Focused</h4>
              <p className="text-gray-400">Clean, optimized, fast</p>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}
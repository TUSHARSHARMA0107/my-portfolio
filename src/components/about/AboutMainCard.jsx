import { motion } from "framer-motion";
import { FiCode, FiServer, FiCpu, FiZap, FiSend } from "react-icons/fi";

export default function AboutMainCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        p-8 md:p-16 rounded-[2.5rem]
        backdrop-blur-3xl 
        bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent
        border border-white/10 
        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        relative overflow-hidden
      "
    >
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6ACBFF]/10 blur-[100px] rounded-full" />
      
      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ---------------- LEFT TEXT ---------------- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6ACBFF] to-[#A5B8FF]">
                About Me
              </span>
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-[#6ACBFF] to-transparent rounded-full" />
          </div>

          <p className="text-gray-300/90 text-xl leading-relaxed font-light">
            I’m a developer who focuses on creating <span className="text-white font-medium">clean, modern and meaningful</span> digital experiences. 
            I build systems that feel smooth, intuitive and professionally crafted.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed font-light">
            I enjoy exploring new technologies and improving my workflow to build
            better products every day. Clean structure, performance and design are 
            the DNA of my work.
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="
              inline-flex items-center gap-3 px-10 py-4 
              rounded-2xl font-bold text-lg tracking-wide
              bg-white text-black
              hover:bg-[#6ACBFF] hover:text-white
              transition-all duration-500
              shadow-[0_10px_20px_rgba(0,0,0,0.2)]
            "
          >
            <FiSend className="text-xl" />
            Connect
          </motion.a>
        </div>

        {/* ---------------- RIGHT ICON LIST ---------------- */}
        <div className="space-y-6">
          {[
            { icon: FiCode, title: "Frontend Development", desc: "Interactive Design & UI/UX" },
            { icon: FiServer, title: "Backend Engineering", desc: "Scalability & Robust Logic" },
            { icon: FiCpu, title: "System Thinking", desc: "Architecture & Problem Solving" },
            { icon: FiZap, title: "Performance Focused", desc: "Clean, Optimized, Fast" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ x: 10 }}
              className="group flex gap-6 items-center p-4 rounded-2xl transition-colors hover:bg-white/5"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#6ACBFF]/50 transition-colors">
                <item.icon className="text-3xl text-[#6ACBFF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-[#6ACBFF] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

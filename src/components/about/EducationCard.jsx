import { motion } from "framer-motion";

export default function EducationCard() {
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
      {/* TITLE */}
      <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ACBFF] to-[#A5B8FF]">
          Education
        </span>
      </h3>

      <div className="space-y-12">

        {/* ---------------- COLLEGE ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <img
            src="/education/college.jpg"
            className="w-20 h-20 rounded-full object-cover shadow-xl"
          />

          <div>
            <h4 className="text-2xl font-bold text-gray-200">
              UIT(HPU) Summer-Hill  Shimla
            </h4>
            <p className="text-gray-400">BTech • 2021–2025 • CSE </p>

            <p className="text-gray-300 mt-2 leading-snug">
              Completed my Enginnering in Computer Science  , gaining both therotical knowledge and pratical exposure.
            </p>
          </div>
        </motion.div>

        {/* ---------------- SCHOOL ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <img
            src="/education/school.jpg"
            className="w-20 h-20 rounded-full object-cover shadow-xl"
          />

          <div>
            <h4 className="text-2xl font-bold text-gray-200">
              DAV Public School New-Shimla Shimla
                         </h4>
            <p className="text-gray-400">X(2019)• XII(2021)</p>

            <p className="text-gray-300 mt-2 leading-snug">
              Completed my secondary education from this instutution , building a strong academic base and essential skills.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
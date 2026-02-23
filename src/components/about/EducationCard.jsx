import { motion } from "framer-motion";

export default function EducationCard() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-4">
          Academic Journey
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Education
          </span>
        </h2>

        <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-[#6ACBFF] to-[#A5B8FF] rounded-full" />
      </div>

      {/* Glass Card (NO BORDER) */}
      <div
        className="
          relative rounded-3xl
          bg-white/5 backdrop-blur-2xl
          px-6 py-8
          sm:px-10 sm:py-10
          md:px-14 md:py-12
          space-y-12
        "
      >
        {/* College */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-xl bg-[#6ACBFF]/20 blur-xl" />
            <img
              src="/education/college.jpg"
              className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl object-cover"
              alt="College"
            />
          </div>

          <div className="space-y-2 max-w-prose">
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                UIT (HPU), Summer Hill
              </h4>
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-white/5 text-[#6ACBFF]">
                2021 – 2025
              </span>
            </div>

            <p className="text-sm sm:text-base font-medium text-gray-400">
              B.Tech • Computer Science Engineering
            </p>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Focused on software architecture, problem-solving, and modern
              engineering practices with strong academic rigor.
            </p>
          </div>
        </motion.div>

        {/* School */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-xl bg-[#A5B8FF]/20 blur-xl" />
            <img
              src="/education/school.jpg"
              className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl object-cover"
              alt="School"
            />
          </div>

          <div className="space-y-2 max-w-prose">
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                DAV Public School, New Shimla
              </h4>
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-white/5 text-[#A5B8FF]">
                Class X & XII
              </span>
            </div>

            <p className="text-sm sm:text-base font-medium text-gray-400">
              Secondary & Senior Secondary Education
            </p>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Built a disciplined academic base with emphasis on analytical
              thinking and continuous learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



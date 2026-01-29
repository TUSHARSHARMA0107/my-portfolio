
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center
        bg-[#0a0a0a] text-white overflow-hidden
        px-5 sm:px-8
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-blue-500/10 blur-[180px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-indigo-500/10 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl w-full text-center">

        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]">
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl" />
            <img
              src="/assets/profileimage.jpg"
              alt="Tushar Sharma"
              className="relative w-full h-full object-cover rounded-full border border-white/10"
            />
          </div>
        </div>

        {/* HELLO */}
        <p className="text-gray-400 text-lg sm:text-xl mb-2">
          Hi, I’m
        </p>

        {/* NAME */}
        <h1 className="font-extrabold leading-tight text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] text-[#6ACBFF]">
          Tushar Sharma
        </h1>

        {/* ROLE */}
        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-300">
          I am a{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">
            <Typewriter
              words={[
                "Software Developer",
                "Full-Stack Developer",
                "Backend Engineer",
                "Frontend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          I build modern, performance-focused web applications with clean UI,
          scalable backend architecture, and premium user experience.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="/resume/tushar.pdf"
            download
            className="
              inline-flex items-center gap-3
              px-7 py-3 rounded-xl
              font-semibold text-base
              bg-white/10 backdrop-blur-md
              border border-white/20
              hover:bg-white/20 hover:border-white
              transition-all duration-300
            "
          >
            <FiDownload className="text-lg" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}}

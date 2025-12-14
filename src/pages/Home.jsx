import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center px-6 pt-24 
        bg-[#0b0b0b] text-white overflow-hidden bg-skill-mesh py-28 px-6
      "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-28 w-[420px] h-[420px] bg-gray-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-10 -right-28 w-[380px] h-380px] bg-gray-500/10 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center z-10">

        {/* LEFT SIDE */}
        <div>
          {/* Line 1 */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-300">
            Hi, I’m
          </h1>

          {/* BIG TUSHAR */}
          <h1
            className="text-8xl md:text-7xl font-extrabold mt-2 leading-tight"
            style={{ color: "#6ACBFF" }}
          >
            Tushar Sharma
          </h1>

          {/* TYPEWRITER */}
          <h2 className="mt-6 text-2.5xl md:text-4xl font-semibold flex gap-3 text-gray-300">
            <span>I am</span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5B8FF] to-[#8AA7FF]">
              a
            </span>

            <span
              className="
                font-extrabold
                text-transparent bg-clip-text
                bg-gradient-to-r from-[#A5B8FF] to-[#8AA7FF]
              "
            >
              <Typewriter
                words={[
                  "Software Developer",
                  "Full-Stack Developer",
                  "Backend Engineer",
                  "Frontend Developer",
                  "Web Developer"
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
          <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
          I'm a full-stack developer who loves building modern, performance-focused applications. Clean Ul, strong backend structure and premium experiences motivate my work.
          </p>

          {/* DOWNLOAD CV BUTTON */}
          <div className="mt-10">
            <a
              href="/resume/tushar.pdf"    ////resume link//
              target="_blank"
              className="
                inline-flex items-center gap-3 px-8 py-4 
                rounded-xl font-semibold text-lg 
                border border-gray-400 hover:border-white
                bg-white/10 backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300
              "
            >
              <FiDownload className="text-xl" />
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE WITH TILT */}
        <div className="flex justify-center md:justify-end">

          <Tilt
            tiltMaxAngleX={14}
            tiltMaxAngleY={14}
            glareEnable={false}
            scale={1}   // no zoom
            transitionSpeed={1800}
            className="
              relative
              w-[320px] h-[320px]
              sm:w-[380px] sm:h-[380px]
              md:w-[430px] md:h-[430px]
              lg:w-[500px] lg:h-[500px]
            "
          >
            {/* ONLY GLOW — NO BORDER */}
            <div
              className="
                absolute inset-0 rounded-full
                
                /* DARK MODE -> White Glow */
                dark:shadow-[0_0_60px_20px_rgba(255,255,255,0.50)]

                /* LIGHT MODE -> Soft Light Yellow Glow */
                shadow-[0_0_55px_18px_rgba(255,249,200,0.55)]
              "
            />

            {/* IMAGE */}
            <div
              className="
                w-full h-full rounded-full overflow-hidden
                shadow-inner shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]
              "
            >
              <img
                src="/assets/profileimage.jpg"
                alt="Tushar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

          </Tilt>

        </div>

      </div>
    </section>
  );
}

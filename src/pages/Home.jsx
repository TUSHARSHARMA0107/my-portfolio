import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const year = new Date().getFullYear();

  const [text] = useTypewriter({
    words: ["Software Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1800,
  });

  // Subtle premium single color for typewriter
  const typewriterClass =
    "text-sky-400 font-extrabold drop-shadow-[0_0_10px_rgba(56,189,248,0.35)]";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#050505] text-white"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.9) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            animation: "dotMove 40s linear infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(34,211,238,0.9) 1px, transparent 0)",
            backgroundSize: "16px 16px",
            animation: "dotMoveReverse 60s linear infinite",
          }}
        />

        <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[160px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-5">
            Portfolio {year}
          </p>

          <h1 className="font-black leading-[0.95] tracking-tighter italic">
            <span className="block text-5xl sm:text-7xl md:text-8xl">
              Tushar
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Sharma.
            </span>
          </h1>

          <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-400">
            I am a{" "}
            <span className={typewriterClass}>
              {text}
            </span>
            <Cursor cursorColor="#38bdf8" />
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-white-500 leading-relaxed">
            I build clean, scalable, and performance-focused web applications
            with a strong emphasis on modern UI, smooth user experience, and
            maintainable backend architecture.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>

            <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-400/40 text-green-400 text-xs uppercase tracking-widest font-semibold shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              ● Available for Hire
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 blur-2xl opacity-40 animate-pulseSlow" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-30 animate-spin-slow" />

            {/* IMAGE — NO GRAYSCALE */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-[#050505] bg-[#111]">
              <img
                src="assets/profileimage.jpg"
                alt="Tushar Sharma"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes dotMove {
          from { background-position: 0 0; }
          to { background-position: 400px 400px; }
        }

        @keyframes dotMoveReverse {
          from { background-position: 0 0; }
          to { background-position: -400px 400px; }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.55; }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulseSlow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

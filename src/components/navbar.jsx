import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ AUTO CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); // md breakpoint
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] md:w-[80%] rounded-3xl
        bg-black/50 backdrop-blur-2xl
        border border-white/15
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        z-50 transition-all duration-500
      "
    >
      <div className="px-6 py-4 flex items-center justify-between">

        {/* LEFT — NAME */}
        <h1 className="text-xl md:text-2xl font-extrabold text-white">
          TUSHAR <span className="text-blue-400">SHARMA</span>
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-200 hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </nav>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white hover:scale-110 transition"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-[#0A66C2] text-[#0A66C2] hover:scale-110 transition"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/15 py-6">
          <div className="flex flex-col items-center space-y-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}

            <div className="flex gap-6 pt-3">
              <FiGithub className="text-white text-2xl" />
              <FiLinkedin className="text-[#0A66C2] text-2xl" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

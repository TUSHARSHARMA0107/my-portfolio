import { useState } from "react";
import { FiGithub, FiLinkedin, FiSun, FiMoon } from "react-icons/fi";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <header
      className="
      fixed top-0 left-0 w-full z-50
      bg-black/20 dark:bg-black/30
      backdrop-blur-xl border-b border-white/10
      shadow-lg
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — NAME */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          TUSHAR <span className="text-blue-400">SHARMA</span>
        </h1>

        {/* CENTER — DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-gray-200 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* RIGHT — ICONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/TUSHARSHARMA0107"
            target="_blank"
            className="
              w-12 h-12 flex items-center justify-center
              rounded-full border-2 border-white/40
              text-white text-2xl bg-transparent
              hover:bg-white/10 hover:scale-110
              hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]
              transition-all duration-300
            "
          >
            <FiGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="
              w-12 h-12 flex items-center justify-center
              rounded-full border-2 border-[#0A66C2]
              text-[#0A66C2] text-2xl bg-transparent
              hover:bg-[#0A66C2]/20 hover:scale-110
              hover:shadow-[0_0_12px_rgba(10,102,194,0.4)]
              transition-all duration-300
            "
          >
            <FiLinkedin />
          </a>

          
                 </div>

        {/* MOBILE BUTTON */}
        <div
          className="
            md:hidden w-14 h-14 rounded-full bg-white/10 border border-white/20
            backdrop-blur-xl shadow-lg flex items-center justify-center gap-2
            active:scale-95 transition-all
          "
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl text-white">☰</span>
          <FiGithub className="text-xl text-white/90" />
          <FiLinkedin className="text-xl text-[#0A66C2]" />
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          md:hidden mt-2 bg-black/40 backdrop-blur-xl border-t border-white/10
          py-4 text-center space-y-4
        ">
          <a href="#home" className="block text-white">Home</a>
          <a href="#about" className="block text-white">About</a>
          <a href="#skills" className="block text-white">Skills</a>
          <a href="#projects" className="block text-white">Projects</a>
          <a href="#contact" className="block text-white">Contact</a>

          {/* MOBILE THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              w-12 h-12 mx-auto flex items-center justify-center
              rounded-full border border-white/30 text-white
              hover:bg-white/10 hover:scale-110 transition-all
            "
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      )}
    </header>
  );
}
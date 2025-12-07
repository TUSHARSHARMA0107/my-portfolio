import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT – NAME */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-wider text-white drop-shadow-sm">
            TUSHAR <span className="text-blue-400">SHARMA</span>
          </h1>
        </div>

        {/* CENTER – MENU (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 text-sm font-medium text-gray-200">

          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="hover:text-blue-400 transition">
                {item}
              </span>

              {/* Animated underline */}
              <span className="
                absolute left-1/2 -bottom-1 w-0 h-[2px] bg-blue-400 rounded-full 
                group-hover:w-full group-hover:left-0 transition-all duration-300
              "></span>
            </a>
          ))}

        </nav>

        {/* RIGHT – SOCIAL ICONS */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">

          {/* GitHub button */}
          <a
            href="https://github.com/TUSHARSHARMA0107"
            target="_blank"
            className="
              w-10 h-10 flex items-center justify-center
              rounded-full border border-white/20 
              text-white text-lg
              bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/40
              hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]
              hover:scale-110 transition-all
            "
          >
            <FiGithub />
          </a>

          {/* LinkedIn button */}
          <a
            href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="
              w-10 h-10 flex items-center justify-center
              rounded-full border border-blue-400/40 
              text-blue-400 text-lg
              bg-blue-400/10 backdrop-blur-sm
              hover:bg-blue-500/20 hover:border-blue-400
              hover:shadow-[0_0_12px_rgba(0,150,255,0.5)]
              hover:scale-110 transition-all
            "
          >
            <FiLinkedin />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col text-center py-5 space-y-5 text-gray-200 text-lg">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      )}

    </header>
  );
}
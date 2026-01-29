

import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* ===== DESKTOP NAVBAR ONLY ===== */}
      <header
        className="
          hidden md:block
          fixed top-4 left-1/2 -translate-x-1/2
          w-[80%] rounded-3xl
          bg-black/50 backdrop-blur-2xl
          border border-white/15
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
          z-50
        "
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-white">
            TUSHAR <span className="text-blue-400">SHARMA</span>
          </h1>

          <nav className="flex gap-10">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <FiGithub className="text-white text-xl cursor-pointer" />
            <FiLinkedin className="text-[#0A66C2] text-xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* ===== MOBILE FLOATING BUTTON ===== */}
      <button
        className="
          md:hidden fixed top-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-black/70 backdrop-blur-xl
          border border-white/20
          text-white text-2xl
          shadow-[0_0_20px_rgba(0,0,0,0.7)]
          active:scale-95 transition
        "
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* ===== BACKDROP ===== */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* ===== SIDEBAR ===== */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full
          w-[85%] max-w-sm
          bg-gradient-to-br from-black via-[#0b0b0b] to-black
          backdrop-blur-2xl
          border-l border-white/15
          shadow-[-10px_0_40px_rgba(0,0,0,0.7)]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <h1 className="text-xl font-extrabold text-white">
            TUSHAR <span className="text-blue-400">SHARMA</span>
          </h1>

          <button
            className="text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-7 px-6 py-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                text-lg text-white
                hover:text-blue-400
                transition
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* SOCIALS */}
        <div className="px-6 mt-auto pb-8 flex gap-6">
          <FiGithub className="text-white text-2xl cursor-pointer hover:scale-110 transition" />
          <FiLinkedin className="text-[#0A66C2] text-2xl cursor-pointer hover:scale-110 transition" />
        </div>
      </aside>
    </>
  );
}

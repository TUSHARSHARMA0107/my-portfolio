
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // auto close mobile menu on desktop
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-[92%] md:w-[80%]
          rounded-3xl bg-black/50 backdrop-blur-2xl
          border border-white/15
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
          z-50
        "
      >
        <div className="px-6 py-4 flex items-center justify-between">

          {/* DESKTOP NAME */}
          <h1 className="hidden md:block text-2xl font-extrabold text-white">
            TUSHAR <span className="text-blue-400">SHARMA</span>
          </h1>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-10">
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

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-4">
            <FiGithub className="text-white text-xl cursor-pointer" />
            <FiLinkedin className="text-[#0A66C2] text-xl cursor-pointer" />
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden w-12 h-12 rounded-full bg-white/10 text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ===== MOBILE SLIDE MENU ===== */}
      {/* BACKDROP */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE PANEL */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[80%] max-w-sm
          bg-black z-50
          border-l border-white/15
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
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
        <nav className="flex flex-col gap-6 px-6 py-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-lg text-white hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* SOCIALS */}
        <div className="flex gap-6 px-6">
          <FiGithub className="text-white text-2xl cursor-pointer" />
          <FiLinkedin className="text-[#0A66C2] text-2xl cursor-pointer" />
        </div>
      </aside>
    </>
  );
            }

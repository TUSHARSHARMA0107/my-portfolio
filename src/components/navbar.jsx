import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] md:w-[80%] rounded-3xl
        bg-black/50  /* darker translucent */
        backdrop-blur-2xl border border-white/15 
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        z-50 transition-all duration-500
        animate-navbarDrop
      "
    >
      <div className="px-6 py-4 flex items-center justify-between">

        {/* LEFT — NAME */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
          TUSHAR <span className="text-blue-400">SHARMA</span>
        </h1>

        {/* CENTER — NAV LINKS (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                relative text-gray-200 text-sm font-medium
                hover:text-white transition group
              "
            >
              {item}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-blue-400 rounded-full 
                  group-hover:w-full
                  transition-all duration-300
                "
              ></span>
            </a>
          ))}
        </nav>

        {/* RIGHT — ICONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            className="
              w-11 h-11 flex items-center justify-center
              rounded-full border border-white/30
              text-white text-xl
              bg-white/5 backdrop-blur-xl
              hover:bg-white/10 hover:scale-110
              hover:shadow-[0_0_14px_rgba(255,255,255,0.4)]
              transition-all duration-300
            "
          >
            <FiGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="
              w-11 h-11 flex items-center justify-center
              rounded-full border border-[#0A66C2]
              text-[#0A66C2] text-xl
              bg-white/5 backdrop-blur-xl
              hover:bg-[#0A66C2]/20 hover:scale-110
              hover:shadow-[0_0_14px_rgba(10,102,194,0.4)]
              transition-all duration-300
            "
          >
            <FiLinkedin />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="
            md:hidden w-12 h-12 flex items-center justify-center
            rounded-full bg-white/10 border border-white/25
            backdrop-blur-xl text-white text-2xl
            active:scale-95 transition
          "
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div
          className="
            md:hidden bg-black/80 backdrop-blur-xl 
            border-t border-white/15 py-6 
            animate-menuSlideDown
          "
        >
          <div className="flex flex-col items-center space-y-6">

            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  text-white text-lg font-medium hover:text-blue-400
                  transition
                "
              >
                {item}
              </a>
            ))}

            {/* Social Icons in mobile menu */}
            <div className="flex gap-6 pt-3">
              <a
                href="https://github.com/TUSHARSHARMA0107"
                target="_blank"
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-full border border-white/40 text-white text-2xl
                  hover:bg-white/10 hover:scale-110 transition
                "
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-full border border-[#0A66C2] 
                  text-[#0A66C2] text-2xl
                  hover:bg-[#0A66C2]/20 hover:scale-110 transition
                "
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



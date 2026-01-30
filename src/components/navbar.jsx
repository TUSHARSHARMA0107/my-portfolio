import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiX,
  FiFileText,
  FiMail,
} from "react-icons/fi";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* ===== AUTO CLOSE ON DESKTOP ===== */
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ===== ACTIVE SECTION DETECTION ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
            w-[80%] mx-auto rounded-3xl
            bg-black/50 backdrop-blur-2xl
            border border-cyan-400/20
            shadow-[0_0_30px_rgba(34,211,238,0.25)]
            px-6 py-4 flex justify-between items-center
          "
        >
          <h1 className="text-2xl font-extrabold text-white">
            TUSHAR <span className="text-cyan-400">SHARMA</span>
          </h1>

          <nav className="flex gap-10">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`
                  relative uppercase text-sm tracking-wide
                  ${
                    active === item
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {item}
                {active === item && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_12px_cyan]" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            <a href="https://github.com/your-username" target="_blank">
              <FiGithub className="text-white text-xl hover:text-cyan-400 transition" />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank">
              <FiLinkedin className="text-[#0A66C2] text-xl hover:scale-110 transition" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="
                px-4 py-2 rounded-full
                border border-cyan-400/40
                text-cyan-400 text-sm
                shadow-[0_0_12px_rgba(34,211,238,0.4)]
                hover:bg-cyan-400/10 transition
              "
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* ================= MOBILE FLOAT BUTTON ================= */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden fixed top-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-black/80 backdrop-blur-xl
          border border-cyan-400/30
          text-white text-2xl
          shadow-[0_0_25px_rgba(34,211,238,0.4)]
        "
      >
        ☰
      </button>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="
                fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
                bg-gradient-to-br from-black via-[#050505] to-black
                border-l border-cyan-400/30
                shadow-[-10px_0_40px_rgba(34,211,238,0.25)]
                backdrop-blur-2xl
              "
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
                <h1 className="text-xl font-extrabold text-white">
                  TUSHAR <span className="text-cyan-400">SHARMA</span>
                </h1>
                <FiX
                  className="text-white text-2xl cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-7 px-6 py-10">
                {sections.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setOpen(false)}
                    className={`
                      text-lg uppercase tracking-wide
                      ${
                        active === item
                          ? "text-cyan-400"
                          : "text-white"
                      }
                    `}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-6 flex flex-col gap-4">
                <a
                  href="/resume.pdf"
                  className="
                    flex items-center justify-center gap-2 py-3
                    rounded-xl border border-cyan-400/40
                    text-cyan-400
                    shadow-[0_0_20px_rgba(34,211,238,0.35)]
                  "
                >
                  <FiFileText /> View Resume
                </a>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center gap-2 py-3
                    rounded-xl bg-white/10 text-white
                  "
                >
                  <FiMail /> Contact Me
                </a>
              </div>

              {/* SOCIALS */}
              <div className="px-6 mt-auto pb-8 flex gap-6">
                <a href="https://github.com/your-username" target="_blank">
                  <FiGithub className="text-white text-2xl hover:text-cyan-400 transition" />
                </a>
                <a href="https://linkedin.com/in/your-username" target="_blank">
                  <FiLinkedin className="text-[#0A66C2] text-2xl hover:scale-110 transition" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


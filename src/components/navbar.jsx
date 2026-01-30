import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);

  /* ================= SCROLL ACTIVE LOGIC ================= */
  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;

      navItems.forEach((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom >= mid) {
          setActive(item.toLowerCase());
        }
      });

      // Force Contact at bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= RESPONSIVE AUTO CLOSE ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2 flex items-center justify-between shadow-2xl shadow-blue-500/10">

          {/* LOGO */}
          <div className="pl-4">
            <h1 className="text-sm md:text-lg font-black tracking-tighter uppercase italic text-white">
              Tushar<span className="hidden md:inline"> Sharma</span>
              <span className="text-blue-500">.</span>
            </h1>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center bg-white/5 p-1.5 rounded-full border border-white/10">
            <LayoutGroup>
              <div className="relative flex gap-1">
                {navItems.map((item) => {
                  const key = item.toLowerCase();
                  const isActive = active === key;

                  return (
                    <a
                      key={item}
                      href={`#${key}`}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      className="relative px-8 py-3 text-[11px] uppercase tracking-[0.22em]"
                    >
                      {/* ACTIVE PILL */}
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_28px_rgba(37,99,235,0.45)]"
                          transition={{ type: "spring", stiffness: 260, damping: 22 }}
                        />
                      )}

                      {/* HOVER PILL */}
                      {hovered === key && !isActive && (
                        <motion.div
                          layoutId="hover-pill"
                          className="absolute inset-0 bg-blue-500/25 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        />
                      )}

                      <motion.span
                        className={`relative z-10 transition-all
                          ${
                            isActive
                              ? "text-white font-extrabold"
                              : "text-white/75 font-semibold hover:text-white"
                          }
                        `}
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 280 }}
                      >
                        {item}
                      </motion.span>
                    </a>
                  );
                })}
              </div>
            </LayoutGroup>
          </nav>

          {/* ================= DESKTOP SOCIALS ================= */}
          <div className="hidden md:flex gap-2">
            <SocialIcon href="https://github.com/TUSHARSHARMA0107"><FiGithub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b"><FiLinkedin /></SocialIcon>
            <SocialIcon href="mailto:tushar43189@gmail.com"><FiMail /></SocialIcon>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white text-lg"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50"
            />

            {/* SIDEBAR */}
            <motion.aside
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="fixed top-0 right-0 h-full w-[82%]
                         bg-gradient-to-b from-[#0a0a0a] via-[#0b0b0b] to-black
                         border-l border-white/10 z-50 p-8
                         flex flex-col justify-between
                         shadow-[-20px_0_60px_rgba(37,99,235,0.15)]"
            >
              <div>
                {/* HEADER */}
                <div className="flex justify-between items-center mb-14 pb-6 border-b border-white/10">
                  <span className="text-lg font-black italic text-white">
                    Tushar <span className="text-blue-500">Sharma</span>.
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-10 h-10 flex items-center justify-center
                               rounded-full bg-white/5 text-gray-300
                               hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FiX />
                  </button>
                </div>

                {/* LINKS */}
                <nav className="flex flex-col gap-7">
                  {navItems.map((item, i) => {
                    const key = item.toLowerCase();
                    const isActive = active === key;

                    return (
                      <motion.a
                        key={item}
                        href={`#${key}`}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="relative pl-6 text-2xl uppercase tracking-tight font-bold"
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-full bg-blue-500" />
                        )}

                        <span
                          className={`transition-colors
                            ${isActive ? "text-blue-500" : "text-white hover:text-blue-400"}
                          `}
                        >
                          {item}
                        </span>
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* FOOTER */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <a
                  href="/resume/tushar.pdf"
                  download
                  className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest shadow-lg shadow-blue-600/30 text-center"
                >
                  Download Resume
                </a>

                <div className="flex gap-4 justify-center">
                  <SocialIcon href="https://github.com/TUSHARSHARMA0107"><FiGithub /></SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FiLinkedin /></SocialIcon>
                  <SocialIcon href="mailto:tushar43189@gmail.com"><FiMail /></SocialIcon>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= SOCIAL ICON ================= */
function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-9 h-9 flex items-center justify-center rounded-full
                 border border-white/10 bg-white/5 text-white
                 hover:bg-blue-600 hover:border-blue-600
                 transition-all duration-300"
    >
      {children}
    </a>
  );
}

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-white/10 
        border-b border-white/10
        shadow-[0_0_35px_rgba(255,255,255,0.08)]
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-8 py-4
          flex items-center justify-between
        "
      >

        {/* LEFT — NAME */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            TUSHAR <span className="text-[#6ACBFF]">SHARMA</span>
          </h1>
        </div>

        {/* CENTER — MENU */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-gray-200">
          {["Home", "About", "Skills", "Projects",  "Contact"].map(                          /////expericence need added
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative group 
                  hover:text-[#6ACBFF]
                  transition duration-200
                "
              >
                {item}

                {/* Luxury underline animation */}
                <span
                  className="
                    absolute left-1/2 -bottom-1 
                    h-[2px] w-0 
                    bg-[#6ACBFF] rounded-full
                    group-hover:w-full 
                    group-hover:left-0
                    transition-all duration-300
                  "
                ></span>
              </a>
            )
          )}
        </nav>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-6 text-2xl">

        <a
  href="https://github.com/TUSHARSHARMA0107"
  target="_blank"
  className="
    relative group text-white text-2xl
  "
>
  <div
    className="
      p-2 rounded-xl
      bg-gradient-to-br from-white/10 to-white/5
      shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]
      border border-white/20
      group-hover:border-[#6ACBFF]/60
      group-hover:shadow-[0_0_18px_rgba(106,203,255,0.6)]
      transition-all duration-300
    "
  >
    <FaGithub className="text-white group-hover:text-[#6ACBFF] transition-all duration-300" />
  </div>
</a>

<a
  href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  className="relative group text-white text-2xl"
>
  <div
    className="
      p-2 rounded-xl
      bg-gradient-to-br from-white/10 to-white/5
      shadow-[inset_0_0_8px_rgba(255,255,255,0.25)]
      border border-white/20
      group-hover:border-[#6ACBFF]/60
      group-hover:shadow-[0_0_18px_rgba(106,203,255,0.6)]
      transition-all duration-300
    "
  >
    <FaLinkedin className="text-[#6ACBFF] group-hover:text-[#8fd7ff] transition-all duration-300" />
  </div>
</a>
        </div>
      </div>
    </header>
  );
}
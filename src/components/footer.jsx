import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-20 border-t border-white/10">
      
      <div className="flex items-center justify-center gap-6 text-center">

        {/* NAME */}
        <h2 className="text-white text-lg font-semibold tracking-wide">
          TUSHAR SHARMA
        </h2>

        {/* ICONS */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/TUSHARSHARMA0107"
            target="_blank"
            className="text-gray-300 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="text-[#6ACBFF] hover:text-[#90d9ff] hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>


          
        </div>

      </div>

      {/* COPYRIGHT under it but still simple */}
      <p className="text-gray-400 text-xs text-center mt-3">
        © {new Date().getFullYear()} Tushar Sharma
      </p>

    </footer>
  );
}
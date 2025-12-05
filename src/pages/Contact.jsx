import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from "../config/emailConfig";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formRef.current,
        EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6 text-white relative  bg-project-glow   py-28 px-6">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6"
      >
        Get <span className="text-[#6ACBFF]">In Touch</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
      >
        Have a project in mind or just want to say hi? Drop me a message 
      </motion.p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-10 rounded-3xl bg-transparent
            border border-white/10
            shadow-[0_0_35px_rgba(106,203,255,0.18)]
            hover:shadow-[0_0_50px_rgba(106,203,255,0.28)]
            transition-all duration-300
          "
        >
          <h3 className="text-3xl font-bold mb-6">Contact Info</h3>

          <div className="space-y-6 text-gray-300">

            <div className="flex items-center gap-4">
              <FiMail className="text-[#6ACBFF] text-2xl" />
              <p>tushar43189@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-[#6ACBFF] text-2xl" />
              <p>+91 76500 10261</p>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-[#6ACBFF] text-2xl" />
              <p> Shimla , Himachal Pradesh , India</p>
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-10 mb-4">Social Links</h4>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/TUSHARSHARMA0107"
              target="_blank"
              className="hover:text-[#6ACBFF] transition"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tushar-sharma-14ab3a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="hover:text-[#6ACBFF] transition"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-10 rounded-3xl bg-transparent
            border border-white/10
            shadow-[0_0_35px_rgba(255,255,255,0.15)]
            hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]
            transition-all duration-300
            space-y-6
          "
        >
          {/* NAME */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Your Name</label>
            <input
              required
              name="from_name"
              type="text"
              className="
                bg-transparent border border-white/20 rounded-xl p-3
                focus:border-[#6ACBFF] outline-none transition
              "
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Your Email</label>
            <input
              required
              name="from_email"
              type="email"
              className="
                bg-transparent border border-white/20 rounded-xl p-3
                focus:border-[#6ACBFF] outline-none transition
              "
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Message</label>
            <textarea
              required
              name="message"
              rows="5"
              className="
                bg-transparent border border-white/20 rounded-xl p-3
                focus:border-[#6ACBFF] outline-none transition
              "
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full flex items-center justify-center gap-3 
              px-6 py-3 rounded-xl
              bg-transparent border border-white/10 
              text-white font-semibold

              hover:border-[#6ACBFF]/40
              hover:shadow-[0_0_30px_rgba(106,203,255,0.35)]
              transition-all duration-300
            "
          >
            <FiSend className="text-[#6ACBFF]" />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-400">Message sent successfully! 🎉</p>
          )}
          {status === "error" && (
            <p className="text-red-400">Error sending message. Try again. Or consider sending directly through mail.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
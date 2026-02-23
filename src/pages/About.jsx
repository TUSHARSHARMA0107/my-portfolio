import { useRef, useState } from "react";
import AboutMainCard from "../components/about/AboutMainCard";
import EducationCard from "../components/about/EducationCard";

export default function About() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    <AboutMainCard key="about" />,
    <EducationCard key="education" />,
  ];

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  const goToSlide = (index) => {
    sliderRef.current?.scrollTo({
      left: index * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="
        relative w-full
        bg-[#0b0b0b]
        text-white
        py-28 sm:py-32
        overflow-hidden
      "
    >
      {/* ===== Soft Ambient Glow (Background only) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(circle_at_50%_0%,rgba(106,203,255,0.18),transparent_60%)]" />
      </div>

      {/* ===== TITLE ===== */}
      <div className="relative z-10 text-center mb-20 px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">
          Get To Know Me
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ACBFF] to-[#3a86ff]">
            Me
          </span>
        </h2>

        <div className="mt-6 w-20 h-[2px] bg-gradient-to-r from-[#6ACBFF] to-transparent mx-auto rounded-full" />
      </div>

      {/* ===== SLIDER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex gap-10
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            no-scrollbar
          "
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="snap-start min-w-full flex justify-center"
            >
              {/* IMPORTANT:
                  ❌ No extra border
                  ❌ No glass-on-glass
                  ✅ Only spacing wrapper
              */}
              <div
                className={`
                  w-full
                  transition-transform duration-700 ease-out
                  ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-[0.96] opacity-70"
                  }
                `}
              >
                {slide}
              </div>
            </div>
          ))}
        </div>

        {/* ===== PAGINATION (Minimal Pills) ===== */}
        <div className="flex justify-center mt-14 gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-500
                ${
                  activeIndex === index
                    ? "w-12 bg-[#6ACBFF] shadow-[0_0_16px_rgba(106,203,255,0.6)]"
                    : "w-4 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

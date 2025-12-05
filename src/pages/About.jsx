import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import AboutMainCard from "../components/about/AboutMainCard";
import EducationCard from "../components/about/EducationCard";

export default function About() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    <AboutMainCard key="1" />,
    <EducationCard key="2" />,
  ];

  // Update dots based on scroll
  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  // Scroll to slide
  const goToSlide = (index) => {
    const container = sliderRef.current;
    if (!container) return;

    container.scrollTo({
      left: index * container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="w-full bg-[#0b0b0b] text-white py-24 px-6 bg-mesh bg-about-light py-28 px-6  "
    >
      {/* TITLE */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        About <span className="text-[#6ACBFF]">Me</span>
      </h2>

      {/* SLIDER WRAPPER */}
      <div className="relative max-w-6xl mx-auto">

        {/* HORIZONTAL SCROLL AREA */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex overflow-x-auto overflow-y-hidden 
            snap-x snap-mandatory scroll-smooth no-scrollbar
          "
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center snap-start"
            >
              <div className="w-full max-w-5xl px-4">{item}</div>
            </div>
          ))}
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center mt-6 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${activeIndex === index 
                  ? "bg-[#6ACBFF] scale-125" 
                  : "bg-white/20 scale-100"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
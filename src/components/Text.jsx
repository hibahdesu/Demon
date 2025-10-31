import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Text({text}) {
  const aboutRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    document.querySelectorAll(".animate-text").forEach((textElement) => {
      textElement.setAttribute("data-text", textElement.textContent.trim());

      ScrollTrigger.create({
        trigger: textElement,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100);
          textElement.style.setProperty("--clip-value", `${clipValue}%`);
        },
      });
    });
  }, []);

  return (
      <div
        ref={aboutRef}
        className="relative w-full h-auto px-4 sm:px-8 md:px-12 py-2 md:py-10 flex justify-center items-center overflow-hidden"
      >
        <h1
          className="animate-text relative z-10 max-w-[80%] text-center text-[2vw] sm:text-[3vw] font-extrabold leading-snug tracking-tight text-neutral-900"
          style={{ "--clip-value": "100%" }}
        >
          {text}
        </h1>

      </div>
  );
}
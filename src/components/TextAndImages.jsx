import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import {tangiroAndAkaza} from "../../constants"

gsap.registerPlugin(ScrollTrigger);

export default function TextAndImages() {
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
    <main>
      <Title
        Style="animated-title text-transparent bg-clip-text bg-gradient-to-r from-[#EE1C25] via-[#46B077] to-[#1D032A]"
        Title={
          <>
            Akaza vs
            <br />
            Tanjiro & Giyu
          </>
        }
      />

      {/* Section 1 */}
      <section
        ref={aboutRef}
        className="relative w-full min-h-screen px-4 sm:px-8 md:px-12 py-12 flex justify-center items-center overflow-hidden"
      >
        <h1
          className="animate-text relative z-10  max-w-[80%] text-center text-[6vw] sm:text-[4vw] font-extrabold leading-snug tracking-tight text-neutral-900"
          style={{ "--clip-value": "100%" }}
        >
          {tangiroAndAkaza[0].text}
        </h1>

        <img
          src={tangiroAndAkaza[0].src[0]}
          alt=""
          className="absolute z-0 bottom-[15%] left-[15%] w-[100px] sm:w-[120px] rotate-[-8deg] rounded-lg object-cover"
        />

        <video
          src={tangiroAndAkaza[0].src[1]}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute z-0 top-[25%] left-[65%] md:left-[75%] w-[200px] sm:w-[250px] rotate-[8deg] object-cover"
        />
      </section>

      {/* Section 2 */}
      <section
        ref={aboutRef}
        className="relative w-full min-h-screen px-4 sm:px-8 md:px-12 py-12 flex justify-center items-center overflow-hidden"
      >
        <h1
          className="animate-text relative z-10 max-w-[80%] text-center text-[6vw] sm:text-[4vw] font-extrabold leading-snug tracking-tight text-neutral-900"
          style={{ "--clip-value": "100%" }}
        >
          {tangiroAndAkaza[1].text}
        </h1>

        <video
          src={tangiroAndAkaza[1].src[0]}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute z-0 top-[20%] left-[5%] w-[200px] sm:w-[250px] rotate-[-5deg] object-cover"
        />

        <video
          src={tangiroAndAkaza[1].src[1]}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute z-0 bottom-[20%] left-[55%] md:left-[75%] w-[200px] sm:w-[250px] rotate-[8deg] object-cover"
        />
      </section>
    </main>
  );
}
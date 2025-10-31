import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          textRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          imageRef.current,
          {
            scale: 1.1,
            opacity: 0,
            filter: 'blur(8px)',
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .fromTo(
          imageRef.current,
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)',
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500 blur-[120px] opacity-10 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2
            ref={titleRef}
            className="animated-title"
          >
            {aboutContent[0].title}
          </h2>
          <p
            ref={textRef}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center"
          >
            {aboutContent[0].text}
          </p>
        </div>

        {/* Polygon-Clipped Image */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex justify-center">
          <div
            ref={imageRef}
            className="absolute h-full w-[80%] sm:w-[300px] md:w-[350px] lg:w-[400px] overflow-hidden shadow-2xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <img
              src={aboutContent[0].img}
              alt="The Final Battle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
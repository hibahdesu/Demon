import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Quotes = ({ quotes }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const allChildren = Array.from(containerRef.current.children);
    const sections = allChildren.filter(el => el.classList.contains('panel'));

    const panelWidth = window.innerWidth;
    sections.forEach(panel => {
      panel.style.width = `${panelWidth}px`;
    });

    const totalWidth = panelWidth * sections.length;
    containerRef.current.style.width = `${totalWidth}px`;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${totalWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [quotes]);

  return (
    <section
      id="fights"
      ref={sectionRef}
      className="horizontal-quotes relative w-full min-h-screen overflow-hidden my-2 md:my-8"
    >
      <div
        ref={containerRef}
        className="flex flex-row flex-nowrap h-full"
      >
        {quotes.map((battle, index) => (
          <div
            key={index}
            className="panel flex-shrink-0 h-screen relative overflow-hidden flex items-center justify-center"
          >
            <div className="z-20 w-full h-full px-4 md:px-16 py-10">
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-3 sm:px-5 md:px-10 lg:px-16 py-6 gap-4 md:gap-6">
                

                {/* Left Image */}
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img
                    src={battle.image[0]}
                    alt={battle.title}
                    className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-none h-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[80vh] rounded-lg object-contain md:object-cover"
                  />
                </div>

                {/* Text Block */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:space-y-6">
                  <h3
                    className={`animated-title2`}
                  >
                    {battle.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 font-body leading-snug md:leading-normal px-2 md:px-0 text-center">
                    {battle.quote}
                  </p>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img
                    src={battle.image[1]}
                    alt={battle.title}
                    className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-none h-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[80vh] rounded-lg object-contain md:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
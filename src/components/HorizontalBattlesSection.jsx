import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalBattlesSection = ({ battles }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get only direct children of container that are panels
    const allChildren = Array.from(containerRef.current.children);
    const sections = allChildren.filter(el => el.classList.contains('panel'));

    console.log('Filtered panels:', sections.length, 'Expected battles:', battles.length);

    // Set each panel width
    const panelWidth = window.innerWidth;
    sections.forEach((panel, i) => {
      panel.style.width = `${panelWidth}px`;
      console.log(`Panel ${i} width =`, panel.offsetWidth);
    });

    // Set container width
    const totalWidth = panelWidth * sections.length;
    containerRef.current.style.width = `${totalWidth}px`;
    console.log('Container scrollWidth:', containerRef.current.scrollWidth);

    // GSAP scroll animation
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
  }, [battles]);

  return (
    <section
      id="fights"
      ref={sectionRef}
      className="horizontal-battles relative w-full min-h-screen overflow-hidden my-8"
    >
      <div
        ref={containerRef}
        className="flex flex-row flex-nowrap h-full"
      >
        {battles.map((battle, index) => (
          <div
            key={index}
            className="panel flex-shrink-0 min-h-screen relative overflow-hidden flex items-center justify-center"
          >
            {/* === COMBATANTS TYPE === */}
            {battle.type === 'combatants' && (
              <>
                <img
                  src={battle.image}
                  alt={battle.title}
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full relative z-20 p-6 sm:p-8 md:p-12">
                  <div className="col-span-12 md:col-start-1 md:col-span-6 row-start-2 row-span-10 flex flex-col justify-end items-start md:items-end">
                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-logo bg-gradient-to-r from-purple-300 via-emerald-300 to-purple-900 text-transparent bg-clip-text drop-shadow-md mb-4">
                      {battle.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg md:text-xl">
                      {battle.description}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* === IMAGE TYPE === */}
            {battle.type === 'image' && (
              <>
                <img
                  src={battle.image[0]}
                  alt={battle.title}
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full relative z-20 p-6 sm:p-8 md:p-12">
                  <div className="col-span-12 md:col-start-1 md:col-span-6 row-start-2 row-span-10 flex flex-col justify-end items-start text-left">
                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-logo bg-gradient-to-r from-purple-300 via-emerald-300 to-purple-900 text-transparent bg-clip-text drop-shadow-md mb-4">
                      {battle.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg md:text-xl">
                      {battle.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>

  );
};

export default HorizontalBattlesSection;
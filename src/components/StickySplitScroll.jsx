import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickySplitScroll = ({ sections }) => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean);

      panels.forEach((panel, i) => {
        const leftPane = panel.querySelector('.pane-left');
        const rightPane = panel.querySelector('.pane-right');
        const imgWrapper = leftPane.querySelector('.images-wrapper');
        const images = imgWrapper.querySelectorAll('img');

        // Pin the text side (rightPane) during scroll of this panel
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          end: 'bottom bottom',
          pin: rightPane,
          pinSpacing: false,
        });

        // Animate images scrolling in left pane
        if (images.length > 1) {
          gsap.to(imgWrapper, {
            yPercent: -100 * (images.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          });
        }

        // Animate swap: fade in/out or slide
        ScrollTrigger.create({
          trigger: panel,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          onUpdate: (self) => {
            const prog = self.progress;

            if (i % 2 === 0) {
              gsap.to(leftPane, {
                opacity: 1 - prog,
                x: -50 * prog,
                ease: 'none',
                overwrite: true,
              });
              gsap.to(rightPane, {
                opacity: prog,
                ease: 'none',
                overwrite: true,
              });
            } else {
              gsap.to(rightPane, {
                opacity: 1 - prog,
                x: 50 * prog,
                ease: 'none',
                overwrite: true,
              });
              gsap.to(leftPane, {
                opacity: prog,
                ease: 'none',
                overwrite: true,
              });
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [sections]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {sections.map((sec, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={i}
            className="panel min-h-screen flex flex-col md:flex-row"
            ref={(el) => (panelsRef.current[i] = el)}
          >
            {/* Left Pane */}
            <div
              className={`pane-left w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden ${
                isEven ? '' : 'md:order-2'
              }`}
              style={{ position: 'relative' }}
            >
              <div className="images-wrapper flex flex-col h-full">
                {sec.images.map((img, idx) => (
                  <div key={idx} className="h-full w-full flex-shrink-0">
                    <img
                      src={img}
                      alt={`sec-${i}-img-${idx}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pane */}
            <div
              className={`pane-right w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center px-6 md:px-10 ${
                isEven ? '' : 'md:order-1'
              }`}
              style={{ position: 'relative', opacity: isEven ? 0 : 1 }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-logo text-yellow-300 mb-4">
                  {sec.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  {sec.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StickySplitScroll;
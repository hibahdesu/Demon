import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { akazaEndContent } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const AkazaEnd = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-in').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 1.5,
            delay: i * 0.4,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-6 py-10 md:py-20 flex justify-center">
      <div
        className="grid grid-cols-2 gap-6 w-full max-w-6xl"
        style={{ gridTemplateRows: 'repeat(10, minmax(100px, auto))' }}
      >
        {akazaEndContent.map((item, index) => {
          const baseClass = `${item.colStart} ${item.rowStart} ${item.rowSpan} rounded-xl overflow-hidden fade-in`;

          if (item.type === 'image') {
            return (
              <div key={index} className={baseClass}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          }

          if (item.type === 'video') {
            return (
              <div key={index} className={`${baseClass} relative group`}>
                <video
                  src={item.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            );
          }

          if (item.type === 'text') {
            return (
              <div
                key={index}
                className={`${item.colStart} ${item.rowStart} ${item.rowSpan} bg-white rounded-xl flex items-center justify-center p-6 text-black text-center ${item.alignment} fade-in`}
              >
                <p className="text-m md:text-xl font-semibold max-w-[200px]">
                  {item.text}
                </p>
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
};

export default AkazaEnd;
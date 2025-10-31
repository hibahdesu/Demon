import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { culturalImpactContent } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const CulturalImpact = () => {
  const sectionRef = useRef();
  const quoteRef = useRef();
  const blockRefs = useRef([]);

  useGSAP(() => {
    const fadeIn = (el, dir = 'y', offset = 80) => {
      gsap.fromTo(
        el,
        { opacity: 0, [dir]: offset },
        {
          opacity: 1,
          [dir]: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    };

    fadeIn(quoteRef.current);
    blockRefs.current.forEach((ref) => fadeIn(ref));
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white px-6 py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 opacity-80 z-0" />

      {/* Quote Reveal */}
      <div ref={quoteRef} className="relative z-10 text-center max-w-4xl mx-auto mb-24">
        <blockquote className="animated-title2 text-4xl md:text-5xl font-bold italic text-white leading-tight tracking-tight">
          {culturalImpactContent.quote.text}
        </blockquote>
        <p className="mt-4 text-sm text-gray-400">{culturalImpactContent.quote.source}</p>
      </div>

      {/* Split Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Left Visual */}
        <div className="flex items-center justify-center">
          <img
            src={culturalImpactContent.image.src}
            alt={culturalImpactContent.image.alt}
            className="rounded-xl shadow-2xl w-full max-w-md grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* Right Text Blocks */}
        <div className="space-y-16">
          {culturalImpactContent.blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div
                key={index}
                ref={(el) => (blockRefs.current[index] = el)}
              >
                <h3 className={`text-2xl font-semibold ${block.color} mb-4 flex items-center gap-2`}>
                  <Icon className="text-xl" />
                  {block.title}
                </h3>
                <ul className="text-lg text-gray-300 space-y-2 leading-relaxed list-disc list-inside">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CulturalImpact;
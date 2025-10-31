import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Text from './Text';
import { boxOfficeContent } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const BoxOfficeBreakdown = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const blockRefs = useRef([]);

  useGSAP(() => {
    const animateBlock = (el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.95, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
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

    animateBlock(titleRef.current);
    blockRefs.current.forEach((ref) => animateBlock(ref));
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Title */}
      <h2 ref={titleRef} className="animated-title3">
        Box Office Breakdown
      </h2>

      {/* Dynamic Blocks */}
      {boxOfficeContent.map((item, index) => (
        <div
          key={index}
          ref={(el) => (blockRefs.current[index] = el)}
          className={`relative z-10 max-w-5xl mx-auto ${
            index === 0 ? 'mb-32' : ''
          } p-10 flex flex-col items-center text-center`}
        >
          <img
            src={item.img}
            alt={item.alt}
            className="rounded-lg shadow-lg mb:2 md:mb-8"
          />
          <h4 className="mt-2 mb-0 text-lg font-semibold">{item.title}</h4>
          <Text text={item.text} />
        </div>
      ))}
    </section>
  );
};

export default BoxOfficeBreakdown;
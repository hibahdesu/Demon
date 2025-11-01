import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { storyOverviewContent } from '../../constants';
import Text from './Text';

gsap.registerPlugin(SplitText, ScrollTrigger);

function StoryOverview() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRefs = useRef([]);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      // Delay to ensure refs are populated
      setTimeout(() => {
        const validParagraphs = paragraphRefs.current.filter(Boolean);
        if (!titleRef.current || validParagraphs.length === 0) return;

        const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
        const paraSplit = new SplitText(validParagraphs, { type: 'lines' });

        titleSplit.chars.forEach((char) => char.classList.add('text-flame'));

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        });

        tl.from(titleSplit.chars, {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          stagger: 0.03,
        }, 0);

        tl.from(paraSplit.lines, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.05,
        }, '-=1');

        ScrollTrigger.matchMedia({
          '(min-width: 768px)': () => {
            gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: 'bottom top',
                scrub: true,
              },
            })
            .to(titleRef.current, { y: 100 }, 0)
            .to(validParagraphs, { y: -10 }, 0);
          },
          '(max-width: 767px)': () => {
            gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            })
            .to(titleRef.current, { y: 30 }, 0)
            .to(validParagraphs, { y: 0 }, 0);
          },
        });

        return () => {
          titleSplit.revert();
          paraSplit.revert();
          ScrollTrigger.clearMatchMedia();
        };
      }, 0); // Delay by one tick
    });
  }, []);

  return (
    <section id="story" className="bg py-6 md:py-18" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        {/* <h1 ref={titleRef} className="animated-title2 mb-6 text-4xl md:text-5xl font-bold text-white">
          {storyOverviewContent.title}
        </h1> */}
        {storyOverviewContent.paragraphs.map((text, index) => (
          <Text
            key={index}
            text={text}
            ref={(el) => paragraphRefs.current[index] = el}
          />
        ))}
      </div>
    </section>
  );
}

export default StoryOverview;
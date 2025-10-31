import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { storyOverviewContent } from '../../constants';

gsap.registerPlugin(SplitText, ScrollTrigger);

function StoryOverview() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRefs = useRef([]);

  useGSAP(() => {
    const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
    const paraSplit = new SplitText(paragraphRefs.current, { type: 'lines' });

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
        .to(paragraphRefs.current, { y: -10 }, 0);
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
        .to(paragraphRefs.current, { y: 0 }, 0);
      },
    });

    return () => {
      titleSplit.revert();
      paraSplit.revert();
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return (
    <section id="story" className="bg py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        <h1 ref={titleRef} className="animated-title2 mb-6 text-4xl md:text-5xl font-bold text-white">
          {storyOverviewContent.title}
        </h1>
        {storyOverviewContent.paragraphs.map((text, index) => (
          <p
            key={index}
            ref={(el) => {
              if (index === 0) paragraphRefs.current = el;
            }}
            className={`max-w-3xl mx-auto text-lg md:text-xl text-gray-100 leading-relaxed ${index === 0 ? 'mb-8' : ''}`}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default StoryOverview;
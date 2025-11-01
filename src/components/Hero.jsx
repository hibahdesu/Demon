import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
    const paragraphSplitLeft = new SplitText('.subtitle-left', { type: 'lines' });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    });

    gsap.from(paragraphSplitLeft.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.07,
      delay: 1.2,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
      .to('.right', { y: 200 }, 0)
      .to('.left', { y: -200 }, 0);

    const startValue = isMobile ? 'top top' : 'center 50%';
    const endValue = isMobile ? 'bottom top' : 'bottom top';

    videoRef.current.onloadedmetadata = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.video-wrapper',
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: false,
        },
      }).to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: 'none',
      });
    };
  }, []);

  return (
    <section id="hero" className="relative z-10 min-h-dvh h-screen w-full overflow-hidden">
      <div className="video-wrapper absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          src="/videos/hero.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="title text-center leading-none text-7xl md:text-[10vw] mt-40 md:mt-32 font-logo">
        Infinity<br />Castle
      </h1>

      <div className="body container mx-auto absolute left-1/2 -translate-x-1/2 bottom-25 lg:bottom-20 md:top-[30vh] flex justify-between items-end px-5">
        <div className="content flex flex-col lg:flex-row w-full gap-10 justify-between items-center lg:items-end mx-auto">
          <div className="space-y-5 hidden md:block">
            <p className="subtitle-left text-4xl font-bold max-w-xl">
              The Final Descent into <br /> the Infinity Castle
            </p>
          </div>
          <div className="view space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
            <p className="subtitle text-left">
              Experience the legendary showdown through visuals, story recaps, and battles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
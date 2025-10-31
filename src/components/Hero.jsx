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

    // Parallax left/right movement
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to('.right', { y: 200 }, 0)
      .to('.left', { y: -200 }, 0);

    // ✅ Video scroll control with pin fix
    const startValue = isMobile ? 'top top' : 'center 50%';
    const endValue = isMobile ? 'bottom top' : 'bottom top';

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
        anticipatePin: 1, // prevents early unpin (black gap)
        pinSpacing: false, // removes default extra space
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: 'none',
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="bg">
        <h1 className="title">
          Infinity
          <br /> Castle
        </h1>

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="subtitle-left">
                The Final Descent into <br /> the Infinity Castle
              </p>
            </div>

            <div className="view">
              <p className="subtitle">
                Experience the legendary showdown through visuals, story recaps, and battles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Fullscreen fixed video */}
      <div className="hero-video">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/hero.mp4"
        />
      </div>
    </>
  );
};

export default Hero;

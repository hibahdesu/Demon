import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrailerVideo() {
  const containerRef = useRef(null);
  const maskCircleRef = useRef(null);

  useEffect(() => {
    if (!maskCircleRef.current || !containerRef.current) return;

    gsap.set(maskCircleRef.current, { attr: { r: 100 } });

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1000',
        scrub: true,
        pin: true,
      },
    }).to(maskCircleRef.current, {
      attr: { r: 1000 },
      ease: 'power2.out',
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="trailer"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Masked Video */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="revealMask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              ref={maskCircleRef}
              cx="960"
              cy="540"
              r="0"
              fill="white"
            />
          </mask>
        </defs>
        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#revealMask)"
        >
          <video
            src="/videos/Trailer.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </section>
  );
}
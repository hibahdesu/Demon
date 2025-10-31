import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Title({Title, Style}) {
    const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-in").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.5,
            delay: i * 0.4, // slight stagger by element index
            scrollTrigger: {
              trigger: el,
              start: "top 85%",   // when top of element hits 85% of viewport
              end: "bottom 15%",  // when bottom hits 15% of viewport
              scrub: true,
              // markers: true, // uncomment for debugging
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionRef} className="" id="title">
        <h1 
        className={`fade-in ${Style}`}
        >
            {Title}
            
        </h1>
     </div>
  )
}

export default Title
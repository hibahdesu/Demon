import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767});

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});

        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});
        
        const paragraphSplitLeft = new SplitText('.subtitle-left', { type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplitLeft.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.07,
            delay: 1.2
        });
        

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.right', { y: 200 }, 0)
        .to('.left', { y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 50%';
        const endValue =  isMobile ? '120% top' : 'bottom top';

        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
        },
        });
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};


    }, [])
  return (
    <>
        <section id='hero' className='bg'>
            <h1 className='title'>Infinity<br /> Castle </h1>
            
            {/* <h1 className='title'>鬼滅の刃</h1> */}
            <div className='body'>
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        {/* <p>Cool. Crisp. Classic.</p> */}
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

        <div className="video hero-video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/hero.mp4"
         className="w-full h-full object-cover"
		/>
	 </div>
    </>
  )
}

export default Hero

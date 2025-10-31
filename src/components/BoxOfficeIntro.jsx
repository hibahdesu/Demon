import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { boxOfficeIntroContent } from '../../constants';

function BoxOfficeIntro() {
  useGSAP(() => {
    const heroSplit = new SplitText('.titleHero', { type: 'chars, words' });
    const paragraphSplitLeft = new SplitText('.subtitle-left-hero', { type: 'lines' });

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
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      <div className="relative w-full h-full">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={boxOfficeIntroContent.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div id="videoHero" className="absolute top-50 md:30 left-12 z-10 max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className={boxOfficeIntroContent.titles[0].className}>
            {boxOfficeIntroContent.titles[0].text}
          </h1>
          <p className={boxOfficeIntroContent.subtitle.className}>
            {boxOfficeIntroContent.subtitle.text}
          </p>
        </div>

        <h1 className={boxOfficeIntroContent.titles[1].className}>
          {boxOfficeIntroContent.titles[1].text}
        </h1>
      </div>
    </section>
  );
}

export default BoxOfficeIntro;
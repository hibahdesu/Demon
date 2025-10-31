import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const InfinityCastleTimeline = () => {
  const sectionRef = useRef();
  const itemsRef = useRef([]);

  useGSAP(() => {
    itemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, { scope: sectionRef });

  const timelineEvents = [
    {
      date: 'March 2025',
      title: 'Official Announcement',
      description: 'Ufotable confirms Infinity Castle as the final arc adaptation.',
    },
    {
      date: 'July 2025',
      title: 'Trailer Release',
      description: 'The trailer trends globally within hours, breaking anime viewership records.',
    },
    {
      date: 'September 2025',
      title: 'Theatrical Premiere',
      description: 'Infinity Castle opens in Japan and worldwide, earning $119.8M in its first month.',
    },
    {
      date: 'October 2025',
      title: 'Global Fan Frenzy',
      description: 'Sold-out IMAX screenings and viral fan reactions dominate social media.',
    },
    {
      date: 'November 2025',
      title: 'Award Season Buzz',
      description: 'Nominated for Best Animation at the Japan Academy Prize and other global honors.',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-black text-white py-32 px-6">
      <h2 className="animated-title3">
        Infinity Castle: A Journey Through Time
      </h2>

      <div className="max-w-4xl mx-auto space-y-16">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            ref={el => itemsRef.current[index] = el}
            className="border-l-4 border-yellow-500 pl-6"
          >
            <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">{event.date}</p>
            <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfinityCastleTimeline;
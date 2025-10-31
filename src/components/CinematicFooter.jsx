import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import { cinematicFooterContent } from '../../constants';

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaYoutube: FaYoutube,
  FaTiktok: FaTiktok,
};

export default function CinematicFooter() {
  const footerRef = useRef(null);
  const quoteRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' }
    );

    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.4 }
    );

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.6 }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600 blur-[120px] opacity-10 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Quote */}
        <div ref={quoteRef} className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold italic text-white leading-tight tracking-tight mb-4">
            {cinematicFooterContent.quote.text}
          </h2>
          <p className="text-sm text-gray-500">
            Made and designed with love by{' '}
            <a
              href={cinematicFooterContent.quote.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white underline transition duration-300"
            >
              {cinematicFooterContent.quote.author.name}
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div
          ref={linksRef}
          className="flex justify-center md:justify-end space-x-6 text-xl text-gray-400"
        >
          {cinematicFooterContent.socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition transform hover:scale-110 duration-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 text-center text-xs text-gray-600">
        {cinematicFooterContent.copyright}
      </div>
    </footer>
  );
}
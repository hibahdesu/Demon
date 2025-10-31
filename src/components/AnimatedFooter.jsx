import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function AnimatedFooter() {
  const footerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black text-white py-16 px-6 md:px-20 font-sans tracking-wide relative overflow-hidden"
    >
      {/* Katana Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Navigation */}
        <div ref={el => itemsRef.current[0] = el} className="flex flex-col space-y-3 text-sm md:text-base text-gray-400">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/trailer" className="hover:text-white transition">Trailer</a>
        </div>

        {/* Signature */}
        <div ref={el => itemsRef.current[1] = el} className="text-center text-sm md:text-base text-gray-400">
          Built and designed with love by{' '}
          <a
            href="https://www.linkedin.com/in/hibahsindi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-white underline transition"
          >
            Hibah Sindi
          </a>
        </div>

        {/* Social Icons */}
        <div ref={el => itemsRef.current[2] = el} className="flex justify-center md:justify-end space-x-5 text-xl text-gray-400">
          <a href="https://www.linkedin.com/in/hibahsindi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/hibahsindi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/hibahsindi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition transform hover:scale-110">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Demon Slayer: Infinity Castle. All rights reserved.
      </div>
    </footer>
  );
}
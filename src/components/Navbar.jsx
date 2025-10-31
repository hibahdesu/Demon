import { useLayoutEffect, useRef, useState } from "react";
import { navLinks } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 GSAP background blur animation on scroll
  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (location.pathname === "/") {
      const ctx = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: navRef.current,
            start: "bottom top",
            scrub: true,
          },
        }).fromTo(
          navRef.current,
          { backgroundColor: "transparent" },
          {
            backgroundColor: "#00000060",
            backdropFilter: "blur(10px)",
            duration: 1,
          }
        );
      }, navRef);

      return () => ctx.revert();
    }
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 text-white bg-transparent transition-all duration-500"
    >
      {/* ✅ Flex container to keep logo & menu in one row */}
      <div className="flex items-center justify-between w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.isPage ? (
                <Link to={link.path} className="nav-link hover:text-[#ffb347]">
                  {link.title}
                </Link>
              ) : (
                <a
                  href={`#${link.id}`}
                  className="nav-link hover:text-[#ffb347]"
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-[60]"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl font-semibold transform transition-all duration-500 ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <div key={link.id}>
            {link.isPage ? (
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="nav-link text-2xl hover:text-[#ffb347]"
              >
                {link.title}
              </Link>
            ) : (
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="nav-link text-2xl hover:text-[#ffb347]"
              >
                {link.title}
              </a>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

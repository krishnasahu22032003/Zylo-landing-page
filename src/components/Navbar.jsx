import React, { useRef, useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ["Home", "About", "Features", "Pricing", "Contact"];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: currentScrollY } = useWindowScroll();
  const [isaudioPlaying, setisaudioPlaying] = useState(false);
  const [isindicatorActive, setisindicatorActive] = useState(false);
  const navContainerRef = useRef(null);
  const audioelementref = useRef(null);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 h-16 border-none sm:inset-x-6 duration-700 top-4 z-50 transition-all"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full p-4 items-center justify-between">
          <div className="flex gap-7 items-center">
            <a href="#home">
              <img src="/images/logo.png" alt="logo" className="w-25 h-25" />
            </a>
          </div>

          <div className="flex h-full items-center gap-6">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Sign In / Sign Up Buttons */}
           <div className="hidden md:flex gap-3 ml-4">
  <a
    href="#signin"
    className="px-5 py-2 text-sm font-medium rounded-xl border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
  >
    Sign In
  </a>
  <a
    href="#signup"
    className="px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg hover:brightness-110 hover:scale-[1.03] transition-all duration-200"
  >
    Sign Up
  </a>
</div>

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

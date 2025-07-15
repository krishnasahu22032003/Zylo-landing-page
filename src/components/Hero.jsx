import React, { useLayoutEffect, useRef } from 'react';
import { FiChevronDown, FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi';
import gsap from 'gsap';
import SplitType from 'split-type';
import NotificationPill from './NotificationPill';

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const socialRef = useRef(null);
  const arrowRef = useRef(null);
  const notificationRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split text after DOM is ready
      const headingSplit = new SplitType(headingRef.current, { types: 'words, chars' });
      const paragraphSplit = new SplitType(paragraphRef.current, { types: 'words, chars' });

      // Show the parent containers before animating their children
      gsap.set(headingRef.current, { opacity: 1 });
      gsap.set(paragraphRef.current, { opacity: 1 });

      // Heading animation
      gsap.from(headingSplit.chars, {
        opacity: 0,
        y: 60,
        stagger: 0.04,
        duration: 2.8,
        ease: 'power4.out'
      });

      // Paragraph animation
      gsap.from(paragraphSplit.words, {
        opacity: 0,
        y: 40,
        stagger: 0.06,
        duration: 2.6,
        ease: 'power2.out',
        delay: 0.4
      });

      // Button animation
      gsap.fromTo(buttonRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: 'power3.out',
          delay: 1
        });

      // Social icons
      gsap.fromTo(socialRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power2.out',
          delay: 0.6
        });

      // Notification pill
      gsap.fromTo(notificationRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power2.out',
          delay: 0.6
        });

      // Arrow
      gsap.fromTo(arrowRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power1.out',
          delay: 1.2
        });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section id='home'  className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-[-1]"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          ref={headingRef}
          className="opacity-0 text-4xl sm:text-6xl md:text-7xl font-negra font-display text-white font-bold leading-tight drop-shadow-lg"
        >
          Transform Ideas into Intelligent Interfaces
        </h1>
        <p
          ref={paragraphRef}
          className="opacity-0 mt-4 max-w-2xl text-lg sm:text-xl text-gray-300 font-medium drop-shadow"
        >
          Zylo helps you build futuristic, responsive, and AI-enhanced web experiences — effortlessly.
        </p>

        <a
          ref={buttonRef}
          href="#features"
          className="mt-8 px-6 py-3 text-base sm:text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-200"
        >
          Explore Features
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <div
        ref={arrowRef}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white"
      >
        <a href="#about" aria-label="Scroll Down">
          <FiChevronDown size={32} className="opacity-80 hover:opacity-100 transition" />
        </a>
      </div>

      {/* Social Icons */}
      <div ref={socialRef} className="absolute bottom-6 left-6 z-10">
        <div className="flex flex-col gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-md">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all">
            <FiGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all">
            <FiLinkedin size={22} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all">
            <FiTwitter size={22} />
          </a>
          <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all">
            <FiDribbble size={22} />
          </a>
        </div>
      </div>

      {/* Notification Pill — keep full original width/layout */}
      <div ref={notificationRef}>
        <NotificationPill />
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { FiChevronDown, FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi';
import NotificationPill from './NotificationPill';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-negra font-display text-white font-bold leading-tight drop-shadow-lg">
          Transform Ideas into Intelligent Interfaces
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-300 font-medium drop-shadow">
          Zylo helps you build futuristic, responsive, and AI-enhanced web experiences — effortlessly.
        </p>

        {/* CTA Button */}
        <a
          href="#features"
          className="mt-8 px-6 py-3 text-base sm:text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-200"
        >
          Explore Features
        </a>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white">
        <a href="#about" aria-label="Scroll Down">
          <FiChevronDown size={32} className="opacity-80 hover:opacity-100 transition" />
        </a>
      </div>

      {/* Vertical Social Icons - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-10">
        <div className="flex flex-col gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-md">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all"
          >
            <FiTwitter size={22} />
          </a>
          <a
            href="https://dribbble.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all"
          >
            <FiDribbble size={22} />
          </a>
        </div>
      </div>
       <NotificationPill />
    </section>
  );
};

export default Hero;

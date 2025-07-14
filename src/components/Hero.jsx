import React from 'react';

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
      </div>
    </section>
  );
};

export default Hero;

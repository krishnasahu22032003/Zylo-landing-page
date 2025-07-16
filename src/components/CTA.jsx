import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#cta-heading",
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#cta-heading",
            start: "top 80%",
            toggleActions: "play reset play reset",
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        "#cta-description",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#cta-description",
            start: "top 85%",
            toggleActions: "play reset play reset",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.utils.toArray(".cta-button").forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play reset play reset",
            },
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0e0e11] to-[#1a1a1f] text-white py-32 px-6 relative overflow-hidden"
    >
      {/* Glowing Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-80px] right-1/4 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2
          id="cta-heading"
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-300 text-transparent bg-clip-text"
        >
          Empower Your Product with Next-Gen UI
        </h2>
        <p
          id="cta-description"
          className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto"
        >
          Zylo enables you to create intelligent, reactive interfaces with cutting-edge design — fast, flexible, and built for the future.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="cta-button px-8 py-4 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-xl transition-transform duration-300 transform hover:scale-105">
            🚀 Get Started for Free
          </button>
          <button className="cta-button px-8 py-4 bg-white cursor-pointer text-black font-semibold rounded-full hover:bg-gray-100 transition shadow-md transform hover:scale-105">
            🔍 Explore the Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

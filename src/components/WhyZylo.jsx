import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyZylo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#whyzylo-heading", {
        scrollTrigger: {
          trigger: "#whyzylo-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from("#whyzylo-paragraph", {
        scrollTrigger: {
          trigger: "#whyzylo-paragraph",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray("#whyzylo-list li").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          x: -80,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });

      gsap.from("#whyzylo-button", {
        scrollTrigger: {
          trigger: "#whyzylo-button",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "back.out(1.7)",
        delay: 0.2,
      });

      gsap.from("#whyzylo-img", {
        scrollTrigger: {
          trigger: "#whyzylo-img",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="whyzylo"
      ref={sectionRef}
      className="bg-gradient-to-br from-white to-blue-50 text-gray-900 py-32 px-6 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Content */}
        <div className="flex-1">
          <h2
            id="whyzylo-heading"
            className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            Why Zylo Exists
          </h2>
          <p
            id="whyzylo-paragraph"
            className="text-lg text-gray-700 mb-10 max-w-xl"
          >
            Rethinking how interfaces behave, perform, and feel. Zylo was designed for the next generation of UI — adaptive, intelligent, and deeply human.
          </p>
          <ul id="whyzylo-list" className="space-y-4 text-gray-800 font-medium text-base">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✔</span> Designed for intelligent UIs
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✔</span> Reactive layers, not static blocks
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✔</span> Customization baked into the core
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">✔</span> Built for speed, collaboration, and scale
            </li>
          </ul>
          <button
            id="whyzylo-button"
            className="mt-12 inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full text-sm font-semibold shadow-xl transition-transform duration-300 hover:scale-105"
          >
            🚀 Read the Manifesto
          </button>
        </div>

        {/* Right Visual: Image */}
        <div className="flex-1 relative flex justify-center items-start">
          <div
            id="whyzylo-img"
            className="relative z-10 w-[300px] h-[200px] sm:w-[380px] sm:h-[240px] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white hover:scale-105 transition-transform duration-500"
          >
            <img
              src="/images/whyzylo-top.png"
              alt="Why Zylo Top"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZylo;

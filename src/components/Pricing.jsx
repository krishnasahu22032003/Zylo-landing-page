import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#pricing-heading", {
        scrollTrigger: {
          trigger: "#pricing-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from("#pricing-subtext", {
        scrollTrigger: {
          trigger: "#pricing-subtext",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray(".pricing-card").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0e0e11] to-[#1a1a1f] text-white py-32 px-6 relative overflow-hidden"
    >
      {/* Glowing Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-700 opacity-10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h2
          id="pricing-heading"
          className="text-5xl font-extrabold mb-4 text-white"
        >
          Simple, Transparent, and Scalable Pricing
        </h2>
        <p
          id="pricing-subtext"
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Choose a plan that suits your project — built for individual developers, growing startups, and enterprise teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {/* Starter Plan */}
        <div className="pricing-card bg-[#15151c] p-10 rounded-3xl border border-gray-700 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-[1.04] backdrop-blur-md">
          <h3 className="text-2xl font-semibold mb-4 text-white">Starter</h3>
          <p className="text-gray-400 mb-6 text-sm">
            For individuals launching new ideas and testing concepts.
          </p>
          <div className="text-5xl font-bold text-white mb-8">Free</div>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>✓ Unlimited Projects</li>
            <li>✓ Community Support</li>
            <li>✓ Access to core UI features</li>
          </ul>
          <button className="mt-10 w-full py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full font-semibold text-white transition shadow-md hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card bg-gradient-to-br from-blue-700 to-purple-700 p-10 rounded-3xl shadow-2xl transform scale-105 ring-2 ring-purple-500/20">
          <h3 className="text-2xl font-semibold mb-4 text-white">Pro</h3>
          <p className="text-white/90 mb-6 text-sm">
            Best for teams building scalable interfaces and experiences.
          </p>
          <div className="text-5xl font-bold text-white mb-8">$29/mo</div>
          <ul className="space-y-4 text-white text-sm">
            <li>✓ Everything in Free</li>
            <li>✓ Premium components & animations</li>
            <li>✓ Team collaboration tools</li>
            <li>✓ Priority email support</li>
          </ul>
          <button className="mt-10 w-full py-3 cursor-pointer bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition shadow-lg hover:scale-105">
            Upgrade to Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card bg-[#15151c] p-10 rounded-3xl border border-gray-700 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-[1.04] backdrop-blur-md">
          <h3 className="text-2xl font-semibold mb-4 text-white">Enterprise</h3>
          <p className="text-gray-400 mb-6 text-sm">
            Custom solutions for large organizations and complex products.
          </p>
          <div className="text-5xl font-bold text-white mb-8">Contact Us</div>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>✓ All Pro features</li>
            <li>✓ Dedicated support & onboarding</li>
            <li>✓ SLA & compliance packages</li>
            <li>✓ Custom integrations</li>
          </ul>
          <button className="mt-10 w-full py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition shadow-md hover:scale-105">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

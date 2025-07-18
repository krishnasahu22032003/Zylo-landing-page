import { useEffect, useRef, useState } from "react";
import { FiCpu, FiZap, FiCode, FiActivity, FiLayers, FiFeather } from "react-icons/fi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Blazing Fast Performance",
    description: "Optimized architecture ensures lightning-speed rendering and transitions across all devices.",
    icon: <FiZap size={28} className="text-purple-400" />,
  },
  {
    title: "AI-Enhanced Workflows",
    description: "Smart suggestions, automation, and adaptability powered by intuitive machine intelligence.",
    icon: <FiCpu size={28} className="text-purple-400" />,
  },
  {
    title: "Developer Friendly",
    description: "Built for engineers with modularity, clean APIs, and stunning design out-of-the-box.",
    icon: <FiCode size={28} className="text-purple-400" />,
  },
  {
    title: "Realtime Collaboration",
    description: "Work seamlessly with your team in a fast, synchronized environment.",
    icon: <FiActivity size={28} className="text-purple-400" />,
  },
  {
    title: "Layered UI Design",
    description: "Create multi-dimensional UI layers with exceptional clarity and polish.",
    icon: <FiLayers size={28} className="text-purple-400" />,
  },
  {
    title: "Featherlight Interface",
    description: "Minimal footprint and intuitive interactions that feel seamless and effortless.",
    icon: <FiFeather size={28} className="text-purple-400" />,
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.1,
            ease: "power4.out",
          }
        );
      });

      gsap.fromTo(
        "#features h2",
        { opacity: 0, y: 150 },
        {
          scrollTrigger: {
            trigger: "#features h2",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        "#features p",
        { opacity: 0, y: 100 },
        {
          scrollTrigger: {
            trigger: "#features p",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        "#features img",
        { opacity: 0, y: 120, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: "#features img",
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-[#0e0e11] text-white py-28 px-6 relative z-[10] border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-white">
            Features Built to Amaze
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the core pillars of Zylo’s power — engineered for modern creators and teams that demand excellence.
          </p>

          <div
            className="relative group mx-auto my-12 w-full max-w-6xl h-[500px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className={`absolute -top-[6px] left-0 w-2/3 h-[6px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-80 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`} />
            <div className={`absolute -bottom-[6px] right-0 w-2/3 h-[6px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full blur-sm opacity-80 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`} />
            <div className={`absolute -bottom-[6px] left-0 w-2/3 h-[6px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-80 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute -top-[6px] right-0 w-2/3 h-[6px] bg-gradient-to-l from-blue-500 to-purple-500 rounded-full blur-sm opacity-80 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`} />

            <div className="relative overflow-hidden rounded-2xl h-full z-10">
              <img
                src="/images/banner.jpg"
                alt="Zylo Neural Grid"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group p-6 rounded-3xl bg-gradient-to-b from-gray-900 via-[#15151b] to-gray-900 border border-gray-800 shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

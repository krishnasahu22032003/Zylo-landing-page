import { useEffect, useRef } from "react";
import { FiCpu, FiZap, FiCode, FiActivity, FiLayers, FiFeather } from "react-icons/fi";
import gsap from "gsap";

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

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".feature-card"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0e0e11] text-white py-28 px-6 relative z-[10] border-t border-gray-800"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-white animate-fade-in">
            Features Built to Amaze
          </h2>
    
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the core pillars of Zylo’s power — engineered for modern creators and teams that demand excellence.
          </p>
    <div className="relative group mx-auto my-12 w-full max-w-6xl h-[500px] rounded-2xl overflow-hidden">
  {/* Animated Glow Border */}
  <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none">
    <div className="w-full h-full rounded-2xl animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-md"></div>
  </div>

  {/* Ambient Glow Behind */}
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/10 via-white/5 to-blue-500/10 blur-3xl scale-110 opacity-50 group-hover:opacity-70 transition duration-700"></div>

  {/* Main Image */}
  <img
    src="/images/banner.png"
    alt="Features Banner"
    className="relative z-20 w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-105"
  />
</div>

        </div>

        {/* Features Grid */}
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
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

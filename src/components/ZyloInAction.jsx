import { useEffect, useRef } from "react";
import gsap from "gsap";

const cards = [
  {
    title: "Design Portfolios",
    type: "image",
    src: "/images/portfolio.jpg",
  },
  {
    title: "Product Demos",
    type: "video",
    src: "/videos/demo.mp4",
  },
  {
    title: "Prototype Speed",
    type: "video",
    src: "/videos/ui-ux.mp4",
  },
  {
    title: "Marketing Dashboards",
    type: "image",
    src: "/images/dashboard.jpg",
  },
];

const ZyloInAction = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!cardRefs.current) return;
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: i * 0.2,
            duration: 1.2,
            ease: "power4.out",
          }
        );
      }
    });
  }, []);

  return (
    <section
    id="about"
      className="bg-white text-gray-900 py-28 px-6 relative z-[10] border-t border-gray-200"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black animate-fade-in">
            Zylo in Action
          </h2>
          <p className="text-gray-700 mt-6 max-w-2xl text-lg leading-relaxed">
            Witness how Zylo transforms digital creation — blending art, performance, and cutting-edge technology into every experience.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-6 grid-rows-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-2xl group transition-all duration-500 
                ${index === 1 || index === 2 ? "col-span-4" : "col-span-2"} row-span-1 hover:scale-[1.02] hover:-translate-y-1`}
            >
              <div className="w-full h-full">
                {card.type === "image" ? (
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={card.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-xl font-semibold text-black bg-white/90 px-4 py-2 rounded-xl shadow-lg">
                  {card.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZyloInAction;
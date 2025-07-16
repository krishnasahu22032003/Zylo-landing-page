import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#contact-heading", {
        scrollTrigger: {
          trigger: "#contact-heading",
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        y: 120,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
      });

      gsap.from("#contact-description", {
        scrollTrigger: {
          trigger: "#contact-description",
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.utils.toArray("#contact-info .info-item").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reset",
          },
          x: -60,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.2,
          ease: "power2.out",
        });
      });

      gsap.from("#contact-form", {
        scrollTrigger: {
          trigger: "#contact-form",
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        delay: 0.4,
      });

      gsap.from("#contact-button", {
        scrollTrigger: {
          trigger: "#contact-button",
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        y: 50,
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-gradient-to-br from-white to-blue-50 text-gray-900 py-32 px-6 border-t border-gray-100 relative overflow-hidden"
    >
      {/* Glowing background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Contact Info */}
        <div>
          <h2 id="contact-heading" className="text-5xl font-extrabold mb-6 leading-tight">
            Let's Connect
          </h2>
          <p id="contact-description" className="text-lg text-gray-700 mb-8 max-w-md">
            We’d love to hear from you. Whether you have a question, a project idea, or just want to say hello.
          </p>

          <div id="contact-info" className="space-y-5 text-gray-700 text-base">
            <div className="flex items-center gap-3 info-item">
              <span className="text-blue-600 text-xl">✉️</span>
              contact@zylo.io
            </div>
            <div className="flex items-center gap-3 info-item">
              <span className="text-blue-600 text-xl">📞</span>
              +1 (123) 456-7890
            </div>
            <div className="flex items-center gap-3 info-item">
              <span className="text-blue-600 text-xl">🌍</span>
              Remote & Global
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form id="contact-form" className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl space-y-6 border border-gray-200">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              rows="5"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            id="contact-button"
            className="w-full py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
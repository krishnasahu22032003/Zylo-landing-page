import { useEffect, useRef } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#footer-heading", {
        scrollTrigger: {
          trigger: "#footer-heading",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from("#footer-paragraph", {
        scrollTrigger: {
          trigger: "#footer-paragraph",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.utils.toArray(".footer-link").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.1,
        });
      });

      gsap.utils.toArray(".footer-social").forEach((icon, i) => {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: i * 0.2,
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-white to-blue-50 text-gray-700 py-24 px-6 border-t border-gray-200 overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className="absolute top-[-80px] left-[-60px] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Description */}
        <div className="md:col-span-2">
          <h3 id="footer-heading" className="text-gray-900 text-3xl font-extrabold mb-4">
            Zylo
          </h3>
          <p id="footer-paragraph" className="text-gray-600 text-base max-w-md">
            Empowering the next evolution of intelligent, adaptable UI systems. Crafted for innovators, developers, and teams that want more from design.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">
            Product
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Features</a></li>
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Pricing</a></li>
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Use Cases</a></li>
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Integrations</a></li>
          </ul>
        </div>

        {/* Connect & Social */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">
            Connect
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Contact</a></li>
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Support</a></li>
            <li><a href="#" className="footer-link hover:text-blue-600 transition font-medium">Careers</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a href="#" className="footer-social text-gray-500 hover:text-blue-600 transition text-xl"><FaTwitter /></a>
            <a href="#" className="footer-social text-gray-500 hover:text-blue-600 transition text-xl"><FaGithub /></a>
            <a href="#" className="footer-social text-gray-500 hover:text-blue-600 transition text-xl"><FaLinkedin /></a>
            <a href="#" className="footer-social text-gray-500 hover:text-blue-600 transition text-xl"><FaDribbble /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-200 mt-16 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zylo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

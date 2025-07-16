import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white to-blue-50 text-gray-700 py-24 px-6 border-t border-gray-200 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-[-80px] left-[-60px] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Description */}
        <div className="md:col-span-2">
          <h3 className="text-gray-900 text-3xl font-extrabold mb-4">Zylo</h3>
          <p className="text-gray-600 text-base max-w-md">
            Empowering the next evolution of intelligent, adaptable UI systems. Crafted for innovators, developers, and teams that want more from design.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Features</a></li>
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Use Cases</a></li>
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Integrations</a></li>
          </ul>
        </div>

        {/* Connect & Social */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Support</a></li>
            <li><a href="#" className="hover:text-blue-600 transition font-medium">Careers</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition text-xl"><FaGithub /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition text-xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition text-xl"><FaDribbble /></a>
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

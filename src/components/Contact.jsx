const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 text-gray-900 py-32 px-6 border-t border-gray-100 relative overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            We’d love to hear from you. Whether you have a question, a project idea, or just want to say hello.
          </p>

          <div className="space-y-5 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✉️</span>
              contact@zylo.io
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">📞</span>
              +1 (123) 456-7890
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">🌍</span>
              Remote & Global
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl space-y-6 border border-gray-200">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" rows="5" placeholder="Your message..." />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg">
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

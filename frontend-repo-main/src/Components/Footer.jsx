import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 pb-14">
        {/* About Us */}
        <div>
          <div className="text-2xl font-extrabold tracking-tight">SKILLSWAP</div>
          <div className="text-emerald-500 text-sm font-semibold mb-6">Unlock Your Skill Potential</div>
          <div className="mb-6">
            <div className="font-bold mb-2">About Us</div>
            <div className="text-xs text-zinc-300">
              SkillSwap is a global platform for exchanging knowledge and abilities. Connect, learn, and grow by sharing your skills with a vibrant community.
            </div>
          </div>
        </div>
        {/* Services */}
        <div>
          <div className="font-bold mb-3">Services</div>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li>Planning</li>
            <li>Research</li>
            <li>Consulting</li>
            <li>Analysis</li>
            <li>User Testing</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-bold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li>Who We Are</li>
            <li>Our Services</li>
            <li>Our Clients</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Contact/Subscribe/Social */}
        <div>
          <div className="font-bold mb-3">Contact us</div>
          <div className="text-xs mb-2">Call : <span className="font-semibold">+0123 456 789 00</span></div>
          <div className="text-xs mb-6">Email: <span className="font-semibold">user@skillswap.com</span></div>
          <form className="flex mb-6">
            <input
              type="email"
              placeholder="Write Email"
              className="flex-1 rounded-l-full px-3 py-2 text-black text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-2 rounded-r-full hover:bg-emerald-600 transition-colors"
            >
              <span className="font-bold">→</span>
            </button>
          </form>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold text-sm">F</span>
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold text-sm">T</span>
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold text-sm">L</span>
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold text-sm">W</span>
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold text-sm">I</span>
          </div>
          <div className="font-bold text-sm mt-3">Follow Us</div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="w-full bg-zinc-900 py-5 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-300 border-t border-zinc-800">
        <div className="flex gap-8 mb-2 md:mb-0">
          <a href="#" className="hover:text-emerald-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-500 transition">Our History</a>
          <a href="#" className="hover:text-emerald-500 transition">What We Do</a>
        </div>
        <div className="text-right">© 2025 SkillSwap. All images are for demo purposes only.</div>
      </div>
    </footer>
  );
};

export default Footer;

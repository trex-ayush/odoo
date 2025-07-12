import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BG_COLOR = '#181C23'; // dark background
const BOX_COLOR = '#232733'; // dark card background
const ACCENT_COLOR = '#8D77AB'; // for subheading and button

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG_COLOR }}>
      {/* Top nav */}
      <div className="flex items-center justify-between px-10 py-6 border-b border-[#232733]">
        <span className="text-2xl font-bold tracking-tight text-white">SkillSwap</span>
        <div className="flex gap-10 text-white font-medium text-lg">
          <span className="cursor-pointer hover:text-[#8D77AB] transition" onClick={() => navigate('/signin')}>Sign-in</span>
          <span className="cursor-pointer hover:text-[#8D77AB] transition" onClick={() => navigate('/signup')}>Sign-up</span>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-10 py-12 max-w-7xl mx-auto w-full gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">Exchange Skills,<br className='hidden md:inline'/>Expand Possibilities.</h1>
          <h2 className="text-2xl font-semibold mb-2" style={{ color: ACCENT_COLOR }}>
            Unlock Skills. Share Yours. Learn Theirs.
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
            Join the SkillSwap community — where everyone teaches, everyone learns.<br />
            Sign up now to start exchanging skills today!
          </p>
          <button
            className="px-8 py-3 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-[#8D77AB] hover:border-[#8D77AB] hover:text-white transition shadow"
            onClick={() => navigate('/signin')}
          >
            Get Started
          </button>
        </div>
        {/* Right: Overlapping cards/images */}
        <div className="flex-1 flex items-center justify-center relative min-h-[400px] w-full">
          {/* Main card */}
          <div className="absolute top-12 left-8 w-80 h-48 bg-[#232733] rounded-2xl shadow-2xl z-10 flex flex-col justify-end p-6">
            <span className="text-white text-lg font-semibold mb-2">Your Skills Have Value. So Do Theirs.</span>
            <span className="text-gray-400 text-sm">Telling stories visually through meaningful experiences.</span>
          </div>
          {/* Profile card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center p-6">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80" alt="profile" className="w-20 h-20 object-cover rounded-full border-4 border-[#8D77AB] mb-4" />
            <span className="text-[#232733] text-xl font-bold mb-1">SkillSwap User</span>
            <span className="text-[#8D77AB] text-sm font-semibold mb-2">UX Designer</span>
            <span className="text-gray-500 text-xs text-center mb-4">Using skill exchange to grow, connect, and design a better future together.</span>
            <button className="px-4 py-2 bg-[#8D77AB] text-white rounded-full text-sm font-semibold hover:bg-[#6e4e8e] transition">Let's start a project together!</button>
          </div>
          {/* Small card */}
          <div className="absolute bottom-0 left-0 w-72 h-28 bg-white rounded-xl shadow-xl z-0 flex flex-row items-center p-4 gap-4">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&q=80" alt="dog" className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex flex-col">
              <span className="text-[#232733] font-bold text-base">Exchange skills. Expand horizons.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage; 
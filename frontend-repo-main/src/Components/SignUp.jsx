import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#181C23' }}>
      <div className="bg-[#232733] rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col border-4 border-[#8D77AB] text-white">
        <h2 className="text-2xl font-bold mb-1 text-center drop-shadow-lg">Create an account</h2>
        <p className="text-white text-sm mb-6 text-center">Connect with your friends today!</p>
        <form className="space-y-4">
          <input type="text" placeholder="Enter Your Username" className="w-full px-4 py-2 rounded-lg border border-[#8D77AB] bg-[#232733] text-white focus:outline-none focus:ring-2 focus:ring-[#8D77AB] placeholder:text-[#8D77AB]" />
          <input type="email" placeholder="Enter Your Email" className="w-full px-4 py-2 rounded-lg border border-[#8D77AB] bg-[#232733] text-white focus:outline-none focus:ring-2 focus:ring-[#8D77AB] placeholder:text-[#8D77AB]" />
          <input type="tel" placeholder="Enter Your Phone Number" className="w-full px-4 py-2 rounded-lg border border-[#8D77AB] bg-[#232733] text-white focus:outline-none focus:ring-2 focus:ring-[#8D77AB] placeholder:text-[#8D77AB]" />
          <div className="relative">
            <input type="password" placeholder="Enter Your Password" className="w-full px-4 py-2 rounded-lg border border-[#8D77AB] bg-[#232733] text-white focus:outline-none focus:ring-2 focus:ring-[#8D77AB] placeholder:text-[#8D77AB] pr-10" />
            {/* Eye icon for show/hide password can be added here */}
          </div>
          <button type="submit" className="w-full py-2 mt-2 bg-[#8D77AB] text-white rounded-lg shadow hover:bg-[#6e4e8e] hover:text-white transition font-semibold">Sign Up</button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-[#8D77AB]" />
          <span className="mx-2 text-white text-sm">Or With</span>
          <div className="flex-1 h-px bg-[#8D77AB]" />
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-[#232733] text-white py-2 rounded-lg mb-3 hover:bg-[#8D77AB] transition">
          <FaFacebookF className="text-lg text-white" />
          Signup with Facebook
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-[#8D77AB] bg-[#232733] text-white py-2 rounded-lg hover:bg-[#8D77AB] transition">
          <FaGoogle className="text-lg text-white" />
          Signup with Google
        </button>
        <div className="mt-6 text-center text-sm text-white">
          Already have an account?{' '}
          <button className="text-white underline font-semibold" onClick={() => navigate('/signin')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 
import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/landing');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#181C23' }}>
      <div className="bg-[#232733] rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col border-4 border-[#8D77AB] text-white">
        <h2 className="text-2xl font-bold mb-1 text-center drop-shadow-lg">LOGIN</h2>
        <p className="text-white text-sm mb-6 text-center">How to get started lorem ipsum dolor at?</p>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input type="text" placeholder="Username" className="w-full px-4 py-2 rounded-lg border border-[#8D77AB] bg-[#232733] text-white focus:outline-none focus:ring-2 focus:ring-[#8D77AB] placeholder:text-[#8D77AB]" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-lg border border-[#8D77AB] bg-[#232733] text-white focus:outline-none focus:ring-2 focus:ring-[#8D77AB] placeholder:text-[#8D77AB]" />
          <button type="submit" className="w-full py-2 mt-2 bg-[#8D77AB] text-white rounded-lg shadow hover:bg-[#6e4e8e] hover:text-white transition font-semibold">Login Now</button>
        </form>
        <div className="my-6 text-center text-white text-sm">Login <span className="font-semibold">with Others</span></div>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-[#8D77AB] bg-[#232733] text-white py-2 rounded-lg hover:bg-[#8D77AB] transition">
            <FaGoogle className="text-lg text-white" />
            <span className="text-sm font-medium">Login with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-[#8D77AB] bg-[#232733] text-white py-2 rounded-lg hover:bg-[#8D77AB] transition">
            <FaFacebookF className="text-lg text-white" />
            <span className="text-sm font-medium">Login with Facebook</span>
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-white">
          Don't have an account?{' '}
          <button className="text-white underline font-semibold" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 
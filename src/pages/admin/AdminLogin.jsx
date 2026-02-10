import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import img from '../../assets/images/Adminbg2.png';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and redirect to the dashboard
    if (email && password) {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center p-4 relative overflow-hidden " style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="backdrop-blur-3xl bg-white border-2 rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md relative z-10 ml-0 md:ml-20">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Admin Login</h2>
        <p className="text-center text-black mb-8">Welcome back! Please login to continue</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-900" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-900" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-12 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Login to Dashboard
          </button>
        </form>

        <p className="text-center text-black text-sm mt-6">
          Secure Admin Access Only
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
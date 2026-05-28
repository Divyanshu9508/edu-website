"use client";
import { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  window.location.href = '/dashboard';
};

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-sans p-4">
      {/* Background Subtle Glows for Tech Theme */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700 relative z-10">
        
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            <span className="text-blue-500">Bhardwaj</span>CodeLabs <span className="text-xl">💻</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            {isLogin ? "Welcome back! Please sign in to your account" : "Create an account to start your coding journey"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Divyanshu Bhardwaj" 
                required 
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400" 
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              required 
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition duration-200 shadow-lg shadow-blue-600/20"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between Login & Signup */}
        <div className="text-center mt-6">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline transition"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>

      </div>
    </div>
  );
}
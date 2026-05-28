"use client";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-slate-900 text-white shadow-lg">
      <div className="text-2xl font-bold tracking-tighter text-blue-400">
        BhardwajCodeLabs
      </div>
      
      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-400 transition">Home</a>
        <a href="/courses" className="hover:text-blue-400 transition">Courses</a>
        <a href="/about" className="hover:text-blue-400 transition">About</a>
      </div>

      <button className="bg-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  );
}
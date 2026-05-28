export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Branding */}
        <div className="text-xl font-bold text-white tracking-tight">
          Bhardwaj<span className="text-blue-500">CodeLabs</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/dashboard" className="hover:text-blue-400 transition">Courses</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
        </div>

        {/* Login Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg shadow-blue-600/20">
          Login
        </button>
      </div>
    </nav>
  );
}
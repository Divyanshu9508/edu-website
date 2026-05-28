export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} BhardwajCodeLabs. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a>
        </div>
        
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
        <p className="font-bold text-white mb-2">BhardwajCodeLabs</p>
        <p className="text-sm">© 2026 BhardwajCodeLabs. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://www.instagram.com/divyanshu_.bhardwaj/" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
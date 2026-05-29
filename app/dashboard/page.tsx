'use client'; // Ye zaroori hai!

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Dashboard() {
  const pathname = usePathname();

  // Helper function for active link styles
  const getLinkClass = (path: string) => 
    `block p-2 rounded transition ${pathname === path ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:block flex flex-col relative">
        <h2 className="text-xl font-bold mb-10 text-blue-500">SynapseAcademy</h2>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className={getLinkClass('/dashboard')}>Dashboard</Link>
          <Link href="/profile" className={getLinkClass('/profile')}>Profile</Link>
          <Link href="/my-courses" className={getLinkClass('/my-courses')}>My Courses</Link>
          <Link href="/project-store" className={getLinkClass('/project-store')}>Project Store</Link>
        </nav>

        <div className="absolute bottom-6 left-6">
          <button className="text-red-400 hover:text-red-300 font-medium text-sm transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to your Dashboard</h1>
        {/* Yahan aapka baki ka code (courses list wagera) aa sakta hai */}
      </main>
    </div>
  );
}
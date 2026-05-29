'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Dashboard() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => 
    `block p-2 rounded transition ${pathname === path ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`;

  // Courses list
  const courses = ["AI Courses", "Robotics", "PCB Designing", "3D Printing", "Python", "Machine Learning", "Electronic Circuit", "Tinkercad Training"];
  const videoCourses = ["Basic AI tools", "Python for beginners", "Machine Learning", "Electronic circuit components", "Basics of Data science"];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:block flex flex-col relative">
        <h2 className="text-xl font-bold mb-10 text-blue-500">SynapseAcademy</h2>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className={getLinkClass('/dashboard')}>Dashboard</Link>
          <Link href="/profile" className={getLinkClass('/profile')}>Profile</Link>
          <Link href="/my-courses" className={getLinkClass('/my-courses')}>My Courses</Link>
        </nav>

        <div className="absolute bottom-6 left-6">
          <button className="text-red-400 hover:text-red-300 font-medium text-sm transition">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Available Courses */}
        <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <div key={course} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition cursor-pointer group">
              <h2 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400">{course}</h2>
            </div>
          ))}
        </div>

        {/* Video Courses */}
        <h1 className="text-2xl font-bold mb-6 text-red-500">Video Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCourses.map((video) => (
            <div key={video} className="bg-slate-900 p-6 rounded-2xl border border-red-500 hover:bg-slate-800 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">▶️</span>
                <h2 className="text-lg font-semibold text-slate-200">{video}</h2>
              </div>
              <p className="text-slate-500 text-sm mt-2 ml-9">Watch now</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
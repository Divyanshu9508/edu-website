export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-10 text-blue-500">BhardwajCodeLabs</h2>
        <nav className="space-y-4 text-slate-400">
          <p className="text-white font-bold">Dashboard</p>
          <p className="hover:text-white cursor-pointer">Profile</p>
          <p className="hover:text-white cursor-pointer">My Courses</p>
          <p className="hover:text-white cursor-pointer">Project Store</p>
          <p className="hover:text-white cursor-pointer">Help & Support</p>
          <p className="hover:text-white cursor-pointer">Contact Us</p>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Available Courses Section */}
        <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {["AI Courses", "Robotics", "PCB Designing", "3D Printing", "Python", "Machine Learning", "Electronic Circuit", "Tinkercad Training"].map((course) => (
            <div key={course} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition cursor-pointer group">
              <h2 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400">{course}</h2>
            </div>
          ))}
        </div>

        {/* Video Courses Section */}
        <h1 className="text-2xl font-bold mb-6 text-red-500">Video Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Basic AI tools", "Python for beginners", "Machine Learning", "Electronic circuit components", "Basics of Data science"].map((video) => (
            <div key={video} className="bg-slate-900 p-6 rounded-2xl border-l-4 border-l-red-500 hover:bg-slate-800 transition cursor-pointer">
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
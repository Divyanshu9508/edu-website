export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-10 text-blue-500">BhardwajCodeLabs</h2>
        <nav className="space-y-4 text-slate-400">
          <p className="text-white font-bold">Dashboard</p>
          <p className="hover:text-white cursor-pointer">My Courses</p>
          <p className="hover:text-white cursor-pointer">Profile</p>
          <p className="hover:text-white cursor-pointer">Help & Support</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Course Cards */}
          {[
            "AI Courses", "Robotics", "PCB Designing", "3D Printing", 
            "Python", "Machine Learning", "Electronic Circuit", "Tinkercad Training"
          ].map((course) => (
            <div key={course} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition cursor-pointer group">
              <h2 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400">{course}</h2>
              <p className="text-slate-500 text-sm mt-2">Start learning now</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
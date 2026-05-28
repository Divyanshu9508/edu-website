export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-10">BhardwajCodeLabs</h2>
        <nav className="space-y-4 text-slate-400">
          <p className="text-blue-500 font-bold">Dashboard</p>
          <p className="hover:text-white cursor-pointer">My Courses</p>
          <p className="hover:text-white cursor-pointer">Profile</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
            <h2 className="text-slate-400 text-sm">Active Projects</h2>
            <p className="text-3xl font-black mt-2">12</p>
          </div>
          {/* Add more cards here */}
        </div>
      </main>
    </div>
  );
}
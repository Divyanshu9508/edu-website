export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome, Divyanshu!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-slate-400">Courses Enrolled</h2>
          <p className="text-2xl font-bold">04</p>
        </div>
        
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-slate-400">Hours Spent</h2>
          <p className="text-2xl font-bold">12.5h</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-slate-400">Certificates</h2>
          <p className="text-2xl font-bold">01</p>
        </div>
      </div>

      <div className="mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
        <p className="text-slate-400">Aapne abhi koi course start nahi kiya hai. Course select karein!</p>
      </div>
    </div>
  );
}
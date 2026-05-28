export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-black mb-6 leading-tight">
          Learn Coding the <span className="text-blue-500">Right Way</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10">
          Join BhardwajCodeLabs to master AI and Robotics with hands-on projects.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
            View Courses
          </button>
        </div>
      </div>
    </main>
  );
}
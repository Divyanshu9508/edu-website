'use client';

export default function MyCourses() {
  const myCourses = [
    { name: "Python for Beginners", progress: 75 },
    { name: "AI Fundamentals", progress: 100 },
    { name: "Robotics v1", progress: 20 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-10">My Learning Journey</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myCourses.map((course) => (
          <div key={course.name} className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-bold mb-4">{course.name}</h2>
            <div className="w-full bg-slate-800 h-2 rounded-full mb-4">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">{course.progress}% Completed</span>
              <button className="text-blue-500 font-semibold hover:underline">Resume &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
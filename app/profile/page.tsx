'use client';

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold">DB</div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold">Divyanshu Bhardwaj</h1>
            <p className="text-slate-400 mt-2">AI Enthusiast & Robotics Developer at BhardwajCodeLabs</p>
            <div className="mt-4 flex gap-4 justify-center md:justify-start">
              <span className="bg-blue-900/30 text-blue-400 px-4 py-1 rounded-full text-sm border border-blue-800">12 Courses Enrolled</span>
              <span className="bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-sm border border-green-800">5 Certificates</span>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl transition font-medium">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        {/* Profile Card */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
              DB
            </div>
            <div>
              <h2 className="text-2xl font-bold">Divyanshu Bhardwaj</h2>
              <p className="text-slate-400">Student & Developer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-500 text-sm">Email</p>
              <p className="font-medium">divyanshu@example.com</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Member Since</p>
              <p className="font-medium">May 2026</p>
            </div>
          </div>
        </div>

        {/* Progress Stats */}
        <h2 className="text-xl font-bold mt-10 mb-6">Learning Progress</h2>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between mb-2">
            <span>Course Completion</span>
            <span className="text-blue-500">75%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-[75%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
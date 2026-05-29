'use client';

export default function ProjectStore() {
  const items = [
    { name: "Robo-Arm Kit", price: "₹2499", type: "Hardware" },
    { name: "AI Chatbot Code", price: "₹499", type: "Digital" },
    { name: "Custom PCB Design", price: "₹899", type: "Hardware" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-10">BhardwajCodeLabs Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-blue-500 transition group">
            <div className="w-full h-40 bg-slate-800 rounded-2xl mb-4 flex items-center justify-center text-4xl">📦</div>
            <span className="text-xs font-bold uppercase text-blue-500 tracking-widest">{item.type}</span>
            <h2 className="text-xl font-bold mt-1">{item.name}</h2>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-white">{item.price}</span>
              <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-400 transition">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
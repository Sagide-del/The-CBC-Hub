import Link from 'next/link';

export default function AdminFinance() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link href="/admin" className="text-[#1a5f7a] mb-4 inline-block">← Back to Dashboard</Link>
      <h1 className="text-3xl font-bold mb-6">Finance Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Today</p>
          <p className="text-2xl font-bold">KSh 1,780</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">This Week</p>
          <p className="text-2xl font-bold">KSh 12,450</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">This Month</p>
          <p className="text-2xl font-bold">KSh 45,670</p>
        </div>
      </div>
    </div>
  );
}

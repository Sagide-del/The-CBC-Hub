import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#1a5f7a] text-white p-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2">Welcome to CBC Hub Admin</p>
      </div>
      
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/admin/resources" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">📚 Resources</h2>
            <p className="text-gray-600">Manage digital content</p>
          </Link>
          
          <Link href="/admin/finance" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">💰 Finance</h2>
            <p className="text-gray-600">Track revenue and transactions</p>
          </Link>
          
          <Link href="/admin/requests" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">📨 Requests</h2>
            <p className="text-gray-600">Customer inquiries</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { useState } from 'react';

export default function AdminRequests() {
  const [requests] = useState([
    { id: 1, name: 'Moi Primary School', request: 'Bulk order - 40 robot kits', status: 'new' },
    { id: 2, name: 'Sarah Muthoni', request: 'Need Form 3 Biology notes', status: 'in-progress' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link href="/admin" className="text-[#1a5f7a] mb-4 inline-block">← Back to Dashboard</Link>
      <h1 className="text-3xl font-bold mb-6">Customer Requests</h1>
      
      <div className="space-y-4">
        {requests.map(r => (
          <div key={r.id} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">{r.name}</h3>
            <p className="text-gray-600 mt-2">{r.request}</p>
            <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

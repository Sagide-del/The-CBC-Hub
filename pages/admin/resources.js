import Link from 'next/link';
import { useState } from 'react';

export default function AdminResources() {
  const [resources] = useState([
    { id: 1, title: 'Biology Notes - Form 4', price: 30, downloads: 1243 },
    { id: 2, title: 'Robot DIY Kit Instructions', price: 0, downloads: 3456 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link href="/admin" className="text-[#1a5f7a] mb-4 inline-block">← Back to Dashboard</Link>
      <h1 className="text-3xl font-bold mb-6">Resources Management</h1>
      
      <div className="bg-white rounded-xl p-6 shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Downloads</th>
            </tr>
          </thead>
          <tbody>
            {resources.map(r => (
              <tr key={r.id} className="border-b">
                <td className="p-2">{r.title}</td>
                <td className="p-2">KSh {r.price}</td>
                <td className="p-2">{r.downloads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

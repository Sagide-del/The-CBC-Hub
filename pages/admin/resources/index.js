import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ResourceUploader from '../../../components/admin/ResourceUploader';

export default function ResourcesManagement() {
  const [resources, setResources] = useState([
    { id: 1, title: 'Biology - Unconditional Reflex Actions', type: 'PDF', grade: 'Form 4', price: 30, downloads: 1243, revenue: 37290, status: 'active' },
    { id: 2, title: 'Robot DIY Kit Instructions', type: 'PDF', grade: 'DIY', price: 0, downloads: 3456, revenue: 0, status: 'active' },
    { id: 3, title: 'Grade 4 Mathematics Worksheets', type: 'PDF', grade: 'Grade 4', price: 50, downloads: 876, revenue: 43800, status: 'active' },
    { id: 4, title: 'Form 3 Chemistry Notes', type: 'PDF', grade: 'Form 3', price: 45, downloads: 654, revenue: 29430, status: 'draft' },
  ]);

  const [showUploader, setShowUploader] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredResources = resources.filter(r => {
    const matchesFilter = filter === 'all' || r.status === filter;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalRevenue = resources.reduce((sum, r) => sum + r.revenue, 0);
  const totalDownloads = resources.reduce((sum, r) => sum + r.downloads, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Resources Management - CBC Hub Admin</title>
      </Head>

      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/admin" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Dashboard</Link>
          <h1 className="text-3xl font-bold">Resources Management</h1>
          <p className="text-white/80 mt-2">Upload and manage all digital content</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">Total Resources</p>
            <p className="text-3xl font-bold">{resources.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">Total Downloads</p>
            <p className="text-3xl font-bold">{totalDownloads.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">Revenue from Resources</p>
            <p className="text-3xl font-bold text-green-600">KSh {totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-wrap gap-4 items-center">
          <button
            onClick={() => setShowUploader(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            + Upload New Resource
          </button>
          
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">All Resources</option>
            <option value="active">Active</option>
            <option value="draft">Drafts</option>
          </select>
        </div>
      </div>

      {/* Resources Table */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Grade</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Downloads</th>
                <th className="text-left p-4">Revenue</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map(r => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <p className="font-medium">{r.title}</p>
                    <p className="text-xs text-gray-500">{r.type}</p>
                  </td>
                  <td className="p-4">{r.grade}</td>
                  <td className="p-4">KSh {r.price}</td>
                  <td className="p-4">{r.downloads.toLocaleString()}</td>
                  <td className="p-4 text-green-600">KSh {r.revenue.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      r.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploader && (
        <ResourceUploader onClose={() => setShowUploader(false)} />
      )}
    </div>
  );
}

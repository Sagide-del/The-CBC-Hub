import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RequestsDashboard() {
  const [filter, setFilter] = useState('all');
  
  const requests = [
    { id: 1, name: 'Moi Primary School', email: 'info@moiprimary.ac.ke', phone: '0722123456', request: 'Bulk order - 40 robot kits for Grade 6 robotics club. Need quote including delivery.', type: 'school', status: 'new', date: '2024-03-02', priority: 'high' },
    { id: 2, name: 'Sarah Muthoni', email: 'sarah.m@email.com', phone: '0711987654', request: 'Need Form 3 Biology notes for upcoming exams. Specifically topics on genetics and evolution.', type: 'resource', status: 'in-progress', date: '2024-03-01', priority: 'medium' },
    { id: 3, name: 'Hillcrest Academy', email: 'admin@hillcrest.sc.ke', phone: '0733456789', request: 'School quote - Art supplies for 120 students. Need paint brushes, paper, clay.', type: 'school', status: 'new', date: '2024-03-01', priority: 'high' },
    { id: 4, name: 'John Kamau', email: 'john.k@email.com', phone: '0744556677', request: 'Download failed after M-Pesa payment for Biology notes. Transaction code: POK1A2B3C4', type: 'support', status: 'pending', date: '2024-02-29', priority: 'urgent' },
    { id: 5, name: 'St. Mary\'s School', email: 'stmarys@edu.ke', phone: '0722889900', request: 'Interested in bulk beads for cultural day event. Need 50 packs of assorted beads.', type: 'school', status: 'new', date: '2024-02-29', priority: 'medium' },
  ];

  const filteredRequests = filter === 'all' ? requests : requests.filter(r => r.status === filter);

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'urgent': return 'bg-red-100 text-red-600';
      case 'high': return 'bg-orange-100 text-orange-600';
      case 'medium': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Customer Requests - CBC Hub Admin</title>
      </Head>

      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/admin" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Dashboard</Link>
          <h1 className="text-3xl font-bold">Customer Requests</h1>
          <p className="text-white/80 mt-2">Manage inquiries, quotes, and support tickets</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">Total Requests</p>
            <p className="text-2xl font-bold">{requests.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">New</p>
            <p className="text-2xl font-bold text-blue-600">{requests.filter(r => r.status === 'new').length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">In Progress</p>
            <p className="text-2xl font-bold text-orange-600">{requests.filter(r => r.status === 'in-progress').length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500">Urgent</p>
            <p className="text-2xl font-bold text-red-600">{requests.filter(r => r.priority === 'urgent').length}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex gap-2">
          {['all', 'new', 'in-progress', 'pending', 'completed'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                filter === status 
                  ? 'bg-[#1a5f7a] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Requests List */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="space-y-4">
          {filteredRequests.map(r => (
            <div key={r.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{r.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(r.priority)}`}>
                      {r.priority}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{r.type}</span>
                  </div>
                  <p className="text-sm text-gray-600">{r.request}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  r.status === 'new' ? 'bg-blue-100 text-blue-600' :
                  r.status === 'in-progress' ? 'bg-orange-100 text-orange-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {r.status}
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 border-t pt-4">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <a href={`mailto:${r.email}`} className="hover:text-[#1a5f7a]">{r.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href={`tel:${r.phone}`} className="hover:text-[#1a5f7a]">{r.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{r.date}</span>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <button className="bg-[#1a5f7a] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0e4a63] transition">
                  Reply
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
                  Create Quote
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                  Mark Complete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

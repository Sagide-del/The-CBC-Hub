import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer 
} from 'recharts';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('week');
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalDownloads: 0,
    totalVisitors: 0,
    pendingRequests: 0,
    recentTransactions: [],
    popularResources: [],
    dailyVisits: []
  });

  // Mock data - replace with real API calls
  useEffect(() => {
    // Simulate loading data
    setStats({
      totalRevenue: 245890,
      totalDownloads: 12453,
      totalVisitors: 34567,
      pendingRequests: 23,
      
      recentTransactions: [
        { id: 1, date: '2024-03-02', customer: 'John Kamau', item: 'Biology Notes - Form 4', amount: 30, status: 'completed' },
        { id: 2, date: '2024-03-02', customer: 'Mary Wanjiku', item: 'Robot Kit (School)', amount: 1250, status: 'completed' },
        { id: 3, date: '2024-03-01', customer: 'Peter Odhiambo', item: 'Beads Pack', amount: 450, status: 'pending' },
        { id: 4, date: '2024-03-01', customer: 'Sarah Muthoni', item: 'Math Worksheets - Grade 4', amount: 50, status: 'completed' },
        { id: 5, date: '2024-02-29', customer: 'James Kariuki', item: 'Science Kit (Home)', amount: 580, status: 'completed' },
      ],
      
      popularResources: [
        { name: 'Biology Reflex Actions', downloads: 1243, revenue: 37290 },
        { name: 'Robot DIY Kit', downloads: 987, revenue: 838950 },
        { name: 'Grade 4 Math Worksheets', downloads: 876, revenue: 43800 },
        { name: 'Beads Assorted', downloads: 654, revenue: 294300 },
        { name: 'Form 4 Past Papers', downloads: 543, revenue: 27150 },
      ],
      
      dailyVisits: [
        { day: 'Mon', visits: 1245, downloads: 234 },
        { day: 'Tue', visits: 1356, downloads: 267 },
        { day: 'Wed', visits: 1432, downloads: 298 },
        { day: 'Thu', visits: 1387, downloads: 276 },
        { day: 'Fri', visits: 1567, downloads: 312 },
        { day: 'Sat', visits: 1890, downloads: 456 },
        { day: 'Sun', visits: 1123, downloads: 198 },
      ],
      
      revenueByCategory: [
        { name: 'School Items', value: 456789 },
        { name: 'Home DIY', value: 234567 },
        { name: 'Digital Resources', value: 123456 },
      ],
      
      recentRequests: [
        { id: 1, name: 'Moi Primary School', request: 'Bulk order - 40 robot kits', status: 'new', date: '2024-03-02' },
        { id: 2, name: 'Sarah Muthoni', request: 'Need Form 3 Biology notes', status: 'in-progress', date: '2024-03-01' },
        { id: 3, name: 'Hillcrest Academy', request: 'School quote - Art supplies', status: 'new', date: '2024-03-01' },
      ]
    });
  }, [timeRange]);

  const COLORS = ['#1a5f7a', '#d98c5f', '#2c6e63', '#8b6b4d', '#6b5b7c'];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Admin Dashboard - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-white/80 mt-2">Welcome back! Here's what's happening with CBC Hub.</p>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-4 flex gap-2">
          {['day', 'week', 'month', 'year'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                timeRange === range 
                  ? 'bg-[#1a5f7a] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">💰 Total Revenue</span>
              <span className="text-2xl text-green-600">KSh {stats.totalRevenue.toLocaleString()}</span>
            </div>
            <p className="text-sm text-green-600">↑ 12.3% from last {timeRange}</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">📥 Downloads</span>
              <span className="text-2xl text-blue-600">{stats.totalDownloads.toLocaleString()}</span>
            </div>
            <p className="text-sm text-blue-600">↑ 8.7% from last {timeRange}</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">👥 Visitors</span>
              <span className="text-2xl text-purple-600">{stats.totalVisitors.toLocaleString()}</span>
            </div>
            <p className="text-sm text-purple-600">↑ 15.2% from last {timeRange}</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">⏳ Pending Requests</span>
              <span className="text-2xl text-orange-600">{stats.pendingRequests}</span>
            </div>
            <p className="text-sm text-orange-600">Need attention</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Daily Visits Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">📊 Daily Traffic</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stats.dailyVisits}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#1a5f7a" strokeWidth={2} />
                <Line type="monotone" dataKey="downloads" stroke="#d98c5f" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue by Category */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">💰 Revenue by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.revenueByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={entry => `${entry.name}: KSh ${entry.value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stats.revenueByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/admin/resources" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
            <span className="text-3xl block mb-3">📚</span>
            <h3 className="font-semibold text-lg">Resources</h3>
            <p className="text-sm text-gray-500">Upload, edit, manage content</p>
          </Link>
          
          <Link href="/admin/finance" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
            <span className="text-3xl block mb-3">💰</span>
            <h3 className="font-semibold text-lg">Finance</h3>
            <p className="text-sm text-gray-500">Revenue, transactions, reports</p>
          </Link>
          
          <Link href="/admin/analytics" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
            <span className="text-3xl block mb-3">📊</span>
            <h3 className="font-semibold text-lg">Analytics</h3>
            <p className="text-sm text-gray-500">Traffic, downloads, trends</p>
          </Link>
          
          <Link href="/admin/requests" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
            <span className="text-3xl block mb-3">📨</span>
            <h3 className="font-semibold text-lg">Requests</h3>
            <p className="text-sm text-gray-500">Customer inquiries, quotes</p>
          </Link>
        </div>
      </div>

      {/* Recent Transactions & Requests */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <Link href="/admin/finance" className="text-sm text-[#1a5f7a]">View All →</Link>
            </div>
            <div className="space-y-3">
              {stats.recentTransactions.map(t => (
                <div key={t.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium text-sm">{t.customer}</p>
                    <p className="text-xs text-gray-500">{t.item}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">KSh {t.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      t.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Customer Requests</h2>
              <Link href="/admin/requests" className="text-sm text-[#1a5f7a]">View All →</Link>
            </div>
            <div className="space-y-3">
              {stats.recentRequests.map(r => (
                <div key={r.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium text-sm">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.request}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded ${
                      r.status === 'new' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {r.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{r.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

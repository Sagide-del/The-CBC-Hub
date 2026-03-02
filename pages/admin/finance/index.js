import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FinanceDashboard() {
  const [dateRange, setDateRange] = useState('month');

  const transactions = [
    { id: 1, date: '2024-03-02', time: '14:23', customer: 'John Kamau', item: 'Biology Notes - Form 4', amount: 30, status: 'completed', mpesa: 'POK1A2B3C4' },
    { id: 2, date: '2024-03-02', time: '11:45', customer: 'Mary Wanjiku', item: 'Robot Kit (School)', amount: 1250, status: 'completed', mpesa: 'PLM5N6O7P8' },
    { id: 3, date: '2024-03-02', time: '09:12', customer: 'Peter Odhiambo', item: 'Beads Pack', amount: 450, status: 'pending', mpesa: null },
    { id: 4, date: '2024-03-01', time: '16:30', customer: 'Sarah Muthoni', item: 'Math Worksheets - Grade 4', amount: 50, status: 'completed', mpesa: 'PQR9S0T1U2' },
    { id: 5, date: '2024-03-01', time: '13:45', customer: 'James Kariuki', item: 'Science Kit (Home)', amount: 580, status: 'completed', mpesa: 'PVW3X4Y5Z6' },
  ];

  const summary = {
    today: 1780,
    week: 12450,
    month: 45670,
    year: 245890,
    pending: 2340,
    withdrawn: 210000,
    balance: 35890
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Finance Dashboard - CBC Hub Admin</title>
      </Head>

      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/admin" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Dashboard</Link>
          <h1 className="text-3xl font-bold">Finance Dashboard</h1>
          <p className="text-white/80 mt-2">Track revenue, transactions, and payouts</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">Today</p>
            <p className="text-2xl font-bold text-green-600">KSh {summary.today}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">This Week</p>
            <p className="text-2xl font-bold text-green-600">KSh {summary.week}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">This Month</p>
            <p className="text-2xl font-bold text-green-600">KSh {summary.month}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm">This Year</p>
            <p className="text-2xl font-bold text-green-600">KSh {summary.year}</p>
          </div>
        </div>
      </div>

      {/* Balance & Withdrawals */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 col-span-2">
            <h2 className="text-lg font-semibold mb-4">M-Pesa Balance</h2>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-3xl font-bold text-[#1a5f7a]">KSh {summary.balance}</p>
                <p className="text-sm text-gray-500">Available for withdrawal</p>
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Withdraw to Bank
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">Last withdrawal: 25 Feb 2024 - KSh 50,000</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Transactions</span>
                <span className="font-bold text-orange-600">KSh {summary.pending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Withdrawn</span>
                <span className="font-bold text-blue-600">KSh {summary.withdrawn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg. Transaction</span>
                <span className="font-bold">KSh 420</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Date/Time</th>
                  <th className="text-left p-4">Customer</th>
                  <th className="text-left p-4">Item</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">M-Pesa Code</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(t => (
                  <tr key={t.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <p className="font-medium">{t.date}</p>
                      <p className="text-xs text-gray-500">{t.time}</p>
                    </td>
                    <td className="p-4">{t.customer}</td>
                    <td className="p-4">
                      <p className="font-medium">{t.item}</p>
                    </td>
                    <td className="p-4 font-bold">KSh {t.amount}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        t.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {t.mpesa ? (
                        <span className="font-mono text-sm">{t.mpesa}</span>
                      ) : (
                        <span className="text-gray-400">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

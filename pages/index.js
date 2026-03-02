import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light text-gray-900">CBC</span>
            <span className="text-2xl font-semibold text-[#1a5f7a]">Hub</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-200">
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">About</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</Link>
            <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">FAQ</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a5f7a] to-[#0e3e52] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Competency-Based
            <span className="font-semibold block mt-2">Curriculum Resources</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Quality educational materials for students, teachers, and inclusive learning.
          </p>
          <div className="flex gap-4">
            <span className="bg-[#d98c5f] text-white px-4 py-2 rounded text-sm font-medium">
              Pay with M-Pesa
            </span>
            <span className="border border-white text-white px-4 py-2 rounded text-sm font-medium">
              15,000+ Resources
            </span>
          </div>
        </div>
      </section>

      {/* Main Categories - 4 Cards Now */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Students Card */}
          <Link href="/student" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-[#2c6e63]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Students</h2>
              <p className="text-sm text-gray-600 mb-4">PP1 to Form 4 • Notes, worksheets, past papers</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">12k resources</span>
                <span className="text-[#2c6e63] group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>

          {/* Teachers Card */}
          <Link href="/teacher" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-[#8b6b4d]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Teachers</h2>
              <p className="text-sm text-gray-600 mb-4">Lesson plans, schemes, assessments</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">5k resources</span>
                <span className="text-[#8b6b4d] group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>

          {/* Inclusive Card */}
          <Link href="/inclusive" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-[#6b5b7c]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Inclusive</h2>
              <p className="text-sm text-gray-600 mb-4">Special needs resources & adaptations</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">8 conditions</span>
                <span className="text-[#6b5b7c] group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>

          {/* Marketplace Card - New */}
          <Link href="/marketplace" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-[#d98c5f]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Marketplace</h2>
              <p className="text-sm text-gray-600 mb-4">Project kits, robotics, craft materials</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Bulk pricing</span>
                <span className="text-[#d98c5f] group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

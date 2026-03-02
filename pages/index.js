import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sophisticated Header */}
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

      {/* Hero - Clean and professional */}
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

      {/* Main Categories - Professional cards */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Students Card */}
          <Link href="/student" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 border border-gray-200">
              <div className="w-16 h-16 bg-[#2c6e63]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Students</h2>
              <p className="text-gray-600 mb-4">PP1 to Form 4 • All subjects</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12,000+ resources</span>
                <span className="text-[#2c6e63] group-hover:translate-x-1 transition inline-block">→</span>
              </div>
            </div>
          </Link>

          {/* Teachers Card */}
          <Link href="/teacher" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 border border-gray-200">
              <div className="w-16 h-16 bg-[#8b6b4d]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">👩‍🏫</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Teachers</h2>
              <p className="text-gray-600 mb-4">Lesson plans • Schemes of work</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">5,000+ resources</span>
                <span className="text-[#8b6b4d] group-hover:translate-x-1 transition inline-block">→</span>
              </div>
            </div>
          </Link>

          {/* Inclusive Learning Card */}
          <Link href="/inclusive" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 border border-gray-200">
              <div className="w-16 h-16 bg-[#6b5b7c]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">♿</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Inclusive</h2>
              <p className="text-gray-600 mb-4">Special needs • Adapted resources</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">500+ resources</span>
                <span className="text-[#6b5b7c] group-hover:translate-x-1 transition inline-block">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats - Clean and minimal */}
        <div className="grid grid-cols-3 gap-4 mt-12 py-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-light text-[#1a5f7a]">15k+</div>
            <div className="text-sm text-gray-600 mt-1">Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#1a5f7a]">14</div>
            <div className="text-sm text-gray-600 mt-1">Grades</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#1a5f7a]">500+</div>
            <div className="text-sm text-gray-600 mt-1">Daily Downloads</div>
          </div>
        </div>

        {/* How It Works - Clean steps */}
        <div className="mt-12">
          <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Simple Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#1a5f7a] font-semibold">1</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Choose</h4>
              <p className="text-sm text-gray-600">Select your category and resource</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#1a5f7a] font-semibold">2</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Pay</h4>
              <p className="text-sm text-gray-600">Quick M-Pesa payment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a5f7a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#1a5f7a] font-semibold">3</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Download</h4>
              <p className="text-sm text-gray-600">Instant access to your resource</p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-sm text-gray-600 text-center">
            © 2024 CBC Hub. Quality educational resources for Kenya.
          </div>
        </div>
      </footer>
    </div>
  );
}

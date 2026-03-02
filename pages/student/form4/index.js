import Link from 'next/link';
import Head from 'next/head';

export default function Form4() {
  const subjects = [
    { id: 'biology', name: 'Biology', icon: '🧬', topics: 8, price: '30-70', color: 'bg-green-600' },
    { id: 'chemistry', name: 'Chemistry', icon: '⚗️', topics: 10, price: '35-75', color: 'bg-purple-600', comingSoon: true },
    { id: 'physics', name: 'Physics', icon: '⚛️', topics: 9, price: '35-75', color: 'bg-blue-600', comingSoon: true },
    { id: 'mathematics', name: 'Mathematics', icon: '📐', topics: 12, price: '40-80', color: 'bg-orange-600', comingSoon: true },
    { id: 'english', name: 'English', icon: '📝', topics: 8, price: '30-60', color: 'bg-red-600', comingSoon: true },
    { id: 'kiswahili', name: 'Kiswahili', icon: '🗣️', topics: 8, price: '30-60', color: 'bg-yellow-600', comingSoon: true },
    { id: 'history', name: 'History', icon: '📜', topics: 7, price: '30-60', color: 'bg-amber-600', comingSoon: true },
    { id: 'geography', name: 'Geography', icon: '🌍', topics: 7, price: '30-60', color: 'bg-emerald-600', comingSoon: true },
    { id: 'cre', name: 'C.R.E', icon: '⛪', topics: 6, price: '25-50', color: 'bg-indigo-600', comingSoon: true },
    { id: 'business', name: 'Business Studies', icon: '💼', topics: 6, price: '25-50', color: 'bg-cyan-600', comingSoon: true },
    { id: 'agriculture', name: 'Agriculture', icon: '🌽', topics: 6, price: '25-50', color: 'bg-lime-600', comingSoon: true },
    { id: 'computer', name: 'Computer Studies', icon: '💻', topics: 5, price: '25-50', color: 'bg-gray-600', comingSoon: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Head>
        <title>Form 4 Resources - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#2c6e63] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/student" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Students
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            Form<span className="font-semibold"> 4</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Kenya Certificate of Secondary Education (K.C.S.E) Resources</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">12</div>
              <div className="text-sm text-gray-600">Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">90+</div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">KSh 25</div>
              <div className="text-sm text-gray-600">Starting from</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured - Biology (First subject with content) */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-gradient-to-r from-[#2c6e63] to-[#1e4f47] text-white rounded-xl p-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🧬</span>
            <div className="flex-1">
              <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm font-medium">NEW</span>
              <h2 className="text-2xl font-bold mt-2">Biology Notes Now Available!</h2>
              <p className="text-white/90">8 topics including Unconditional Reflex Actions with Bloom's Taxonomy</p>
            </div>
            <Link 
              href="/student/form4/biology"
              className="bg-white text-[#2c6e63] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              View Biology →
            </Link>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-light text-gray-900 mb-6">All Subjects</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            subject.comingSoon ? (
              <div key={subject.id} className="bg-white rounded-xl border border-gray-200 p-6 opacity-75 cursor-not-allowed">
                <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                  {subject.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{subject.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{subject.topics} topics • KSh {subject.price}</p>
                <div className="text-center py-2 bg-gray-100 rounded text-gray-500 text-sm">
                  Coming Soon
                </div>
              </div>
            ) : (
              <Link 
                key={subject.id}
                href={`/student/form4/${subject.id}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                  {subject.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{subject.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{subject.topics} topics • KSh {subject.price}</p>
                <span className="text-[#2c6e63] text-sm font-medium">View resources →</span>
              </Link>
            )
          ))}
        </div>

        {/* K.C.S.E Information */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-light text-gray-900 mb-4">📋 About K.C.S.E</h2>
          <p className="text-gray-700 mb-4">The Kenya Certificate of Secondary Education (K.C.S.E) is the national examination taken at the end of Form 4. Our resources are:</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Aligned with the latest K.I.C.D curriculum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Structured following Bloom's Taxonomy for deep learning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Include past K.C.S.E questions with marking schemes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Created by experienced K.C.S.E examiners</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import { useState } from 'react';

export default function TeacherSection() {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const resourceCategories = [
    { 
      id: 'lesson-plans',
      name: 'Lesson Plans',
      icon: '📝',
      count: 456,
      description: 'Detailed, CBC-aligned lesson plans'
    },
    { 
      id: 'schemes',
      name: 'Schemes of Work',
      icon: '📅',
      count: 324,
      description: 'Termly and yearly schemes'
    },
    { 
      id: 'notes',
      name: 'Teaching Notes',
      icon: '📚',
      count: 567,
      description: 'Comprehensive subject notes'
    },
    { 
      id: 'exams',
      name: 'Exams & Assessments',
      icon: '📋',
      count: 789,
      description: 'End-term exams with marking schemes'
    },
    { 
      id: 'worksheets',
      name: 'Worksheets',
      icon: '📄',
      count: 432,
      description: 'Printable practice exercises'
    },
    { 
      id: 'record-books',
      name: 'Record Books',
      icon: '📊',
      count: 123,
      description: 'Digital record keeping templates'
    },
    { 
      id: 'report-cards',
      name: 'Report Card Templates',
      icon: '📑',
      count: 89,
      description: 'CBC report card formats'
    },
    { 
      id: 'progression-tools',
      name: 'Progression Tools',
      icon: '📈',
      count: 67,
      description: 'Track learner progress'
    },
  ];

  const featuredResources = [
    { 
      id: 1, 
      title: 'Grade 4 Mathematics Lesson Plans - Term 1', 
      level: 'Grade 4',
      subject: 'Mathematics',
      type: 'Lesson Plan',
      price: 250,
      downloads: 1234,
      rating: 4.8
    },
    { 
      id: 2, 
      title: 'Form 2 English Schemes of Work 2024', 
      level: 'Form 2',
      subject: 'English',
      type: 'Scheme of Work',
      price: 300,
      downloads: 987,
      rating: 4.7
    },
    { 
      id: 3, 
      title: 'Grade 7 Integrated Science Notes - Full Year', 
      level: 'Grade 7',
      subject: 'Science',
      type: 'Notes',
      price: 450,
      downloads: 756,
      rating: 4.9
    },
    { 
      id: 4, 
      title: 'PP1 Environmental Activities Worksheets (Set of 50)', 
      level: 'PP1',
      subject: 'Environmental',
      type: 'Worksheets',
      price: 200,
      downloads: 654,
      rating: 4.6
    },
    { 
      id: 5, 
      title: 'Grade 6 End-Term Exams with Marking Schemes', 
      level: 'Grade 6',
      subject: 'All Subjects',
      type: 'Exams',
      price: 500,
      downloads: 1123,
      rating: 4.8
    },
    { 
      id: 6, 
      title: 'CBC Report Card Templates (Excel) - All Grades', 
      level: 'All Grades',
      subject: 'Administration',
      type: 'Templates',
      price: 150,
      downloads: 2341,
      rating: 4.5
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-[#8b6b4d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            Teacher<span className="font-semibold"> Resources</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Professional teaching materials for CBC educators</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-2 flex items-center border border-gray-200">
          <span className="text-gray-400 px-3">🔍</span>
          <input 
            type="text" 
            placeholder="Search lesson plans, schemes, exams..." 
            className="flex-1 outline-none text-gray-700"
          />
          <button className="bg-[#8b6b4d] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#6b4f38] transition">
            Search
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-8 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          <button 
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
              selectedLevel === 'all' 
                ? 'bg-[#8b6b4d] text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            All Levels
          </button>
          {['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Form 1', 'Form 2', 'Form 3', 'Form 4'].map(level => (
            <button 
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                selectedLevel === level 
                  ? 'bg-[#8b6b4d] text-white' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Resource Categories Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Resource Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resourceCategories.map((cat) => (
              <Link 
                key={cat.id}
                href={`/teacher/${cat.id}`}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{cat.description}</p>
                <p className="text-sm text-[#8b6b4d]">{cat.count} items</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-light text-gray-900">Popular Resources</h2>
            <Link href="/teacher/all" className="text-[#8b6b4d] text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredResources.map((res) => (
              <div key={res.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs bg-[#8b6b4d]/10 text-[#8b6b4d] px-2 py-1 rounded">
                    {res.type}
                  </span>
                  <span className="text-sm font-medium text-gray-700">⭐ {res.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{res.title}</h3>
                <div className="flex gap-3 text-xs text-gray-500 mb-3">
                  <span>{res.level}</span>
                  <span>•</span>
                  <span>{res.subject}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">KSh</span>
                    <span className="text-xl font-semibold text-gray-900 ml-1">{res.price}</span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
                    Download
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">{res.downloads} downloads</p>
              </div>
            ))}
          </div>
        </section>

        {/* Free Resources Section */}
        <section className="mb-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-light text-gray-900 mb-2">Free Resources</h2>
          <p className="text-gray-600 mb-6">Download these complimentary teaching materials</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-medium">Lesson Plan Template</h4>
                <p className="text-xs text-gray-500">DOCX • 25KB</p>
              </div>
              <button className="text-[#8b6b4d] font-medium text-sm">Free</button>
            </div>
            <div className="bg-white p-4 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-medium">Grade 1 Math Sample</h4>
                <p className="text-xs text-gray-500">PDF • 1.2MB</p>
              </div>
              <button className="text-[#8b6b4d] font-medium text-sm">Free</button>
            </div>
            <div className="bg-white p-4 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-medium">Marking Guide</h4>
                <p className="text-xs text-gray-500">PDF • 500KB</p>
              </div>
              <button className="text-[#8b6b4d] font-medium text-sm">Free</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Link from 'next/link';

export default function StudentSection() {
  const grades = [
    { id: 'pp1', name: 'PP1', range: '3-4 years', count: 120 },
    { id: 'pp2', name: 'PP2', range: '4-5 years', count: 135 },
    { id: 'grade1', name: 'Grade 1', range: '6 years', count: 210 },
    { id: 'grade2', name: 'Grade 2', range: '7 years', count: 198 },
    { id: 'grade3', name: 'Grade 3', range: '8 years', count: 245 },
    { id: 'grade4', name: 'Grade 4', range: '9 years', count: 267 },
    { id: 'grade5', name: 'Grade 5', range: '10 years', count: 289 },
    { id: 'grade6', name: 'Grade 6', range: '11 years', count: 302 },
    { id: 'grade7', name: 'Grade 7', range: '12 years', count: 178 },
    { id: 'grade8', name: 'Grade 8', range: '13 years', count: 156 },
    { id: 'grade9', name: 'Grade 9', range: '14 years', count: 142 },
    { id: 'form1', name: 'Form 1', range: '15 years', count: 98 },
    { id: 'form2', name: 'Form 2', range: '16 years', count: 87 },
    { id: 'form3', name: 'Form 3', range: '17 years', count: 76 },
    { id: 'form4', name: 'Form 4', range: '18 years', count: 65 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#2c6e63] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            Student<span className="font-semibold"> Resources</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Select your grade level</p>
        </div>
      </div>

      {/* Grade Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {grades.map((grade) => (
            <Link 
              key={grade.id}
              href={`/student/${grade.id}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{grade.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{grade.range}</p>
              <p className="text-xs text-[#2c6e63]">{grade.count} resources</p>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-light text-gray-900 mb-6">Grade Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-semibold text-[#2c6e63]">PP1-3</div>
              <div className="text-sm text-gray-600">Early Years</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#2c6e63]">Grade 4-6</div>
              <div className="text-sm text-gray-600">Upper Primary</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#2c6e63]">Grade 7-9</div>
              <div className="text-sm text-gray-600">Junior Secondary</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#2c6e63]">Form 1-4</div>
              <div className="text-sm text-gray-600">Senior Secondary</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

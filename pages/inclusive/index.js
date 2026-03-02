import Link from 'next/link';
import { useState } from 'react';

export default function InclusiveSection() {
  const [selectedCondition, setSelectedCondition] = useState('all');

  const conditions = [
    {
      id: 'visual-impairment',
      name: 'Visual Impairment',
      icon: '👁️',
      prevalence: '2.5% of learners',
      resources: 89,
      description: 'Resources for blind and partially sighted students',
      formats: ['Braille', 'Audio', 'Large Print', 'Tactile'],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'hearing-impairment',
      name: 'Hearing Impairment',
      icon: '👂',
      prevalence: '1.8% of learners',
      resources: 67,
      description: 'Resources for deaf and hard of hearing students',
      formats: ['Sign Language Video', 'Visual Aids', 'Captioned Content'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'physical-challenges',
      name: 'Physical Challenges',
      icon: '🦽',
      prevalence: '1.2% of learners',
      resources: 45,
      description: 'Adapted activities for mobility challenges',
      formats: ['Adapted Worksheets', 'Accessible Formats', 'Modified Activities'],
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'learning-difficulties',
      name: 'Learning Difficulties',
      icon: '🧩',
      prevalence: '5.3% of learners',
      resources: 123,
      description: 'Support for dyslexia, dyscalculia, and more',
      formats: ['Simplified Text', 'Multi-sensory', 'Structured Content'],
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'autism-spectrum',
      name: 'Autism Spectrum (ASD)',
      icon: '🌟',
      prevalence: '1.7% of learners',
      resources: 56,
      description: 'Resources for autistic learners',
      formats: ['Visual Schedules', 'Social Stories', 'Sensory-Friendly'],
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 'dyslexia',
      name: 'Dyslexia',
      icon: '📖',
      prevalence: '3.2% of learners',
      resources: 78,
      description: 'Reading and writing support',
      formats: ['Dyslexia-Friendly Fonts', 'Audio Books', 'Phonics Resources'],
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      id: 'dyscalculia',
      name: 'Dyscalculia',
      icon: '🧮',
      prevalence: '2.1% of learners',
      resources: 42,
      description: 'Math learning difficulties',
      formats: ['Visual Math', 'Manipulatives', 'Step-by-Step Guides'],
      color: 'bg-pink-100 text-pink-800'
    },
    {
      id: 'adhd',
      name: 'ADHD',
      icon: '⚡',
      prevalence: '4.0% of learners',
      resources: 61,
      description: 'Attention and focus support',
      formats: ['Focused Activities', 'Break Cards', 'Movement Breaks'],
      color: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'speech-language',
      name: 'Speech & Language',
      icon: '🗣️',
      prevalence: '2.8% of learners',
      resources: 34,
      description: 'Communication support',
      formats: ['Picture Cards', 'Speech Exercises', 'Communication Boards'],
      color: 'bg-teal-100 text-teal-800'
    },
    {
      id: 'cerebral-palsy',
      name: 'Cerebral Palsy',
      icon: '🦿',
      prevalence: '0.8% of learners',
      resources: 28,
      description: 'Motor skills and communication support',
      formats: ['Adapted Tools', 'Switch-Accessible', 'Eye Gaze'],
      color: 'bg-gray-100 text-gray-800'
    },
    {
      id: 'down-syndrome',
      name: 'Down Syndrome',
      icon: '🧸',
      prevalence: '0.6% of learners',
      resources: 32,
      description: 'Cognitive and social support',
      formats: ['Simple Language', 'Visual Cues', 'Repetitive Practice'],
      color: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'multiple-disabilities',
      name: 'Multiple Disabilities',
      icon: '🤝',
      prevalence: '0.4% of learners',
      resources: 41,
      description: 'Complex needs support',
      formats: ['Individualized', 'Multi-modal', 'Specialized'],
      color: 'bg-violet-100 text-violet-800'
    },
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'Mathematics in Braille - Grade 4 Complete Set',
      condition: 'Visual Impairment',
      price: 350,
      format: 'Braille PDF',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Science Experiments with Sign Language Videos',
      condition: 'Hearing Impairment',
      price: 280,
      format: 'Video + PDF',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Dyslexia-Friendly Reading Cards (Set of 50)',
      condition: 'Dyslexia',
      price: 180,
      format: 'Printable Cards',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Visual Schedule Cards for Autism',
      condition: 'Autism Spectrum',
      price: 150,
      format: 'Printable PDF',
      rating: 4.9
    },
    {
      id: 5,
      title: 'Adapted PE Activities for Physical Challenges',
      condition: 'Physical Challenges',
      price: 220,
      format: 'Guide + Cards',
      rating: 4.6
    },
    {
      id: 6,
      title: 'Sensory-Friendly Classroom Guide',
      condition: 'Multiple',
      price: 190,
      format: 'PDF',
      rating: 4.8
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-[#6b5b7c] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            Inclusive<span className="font-semibold"> Learning</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Resources for every learner, every ability</p>
        </div>
      </div>

      {/* Accessibility Notice */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-white border-l-4 border-[#6b5b7c] p-4 rounded-r-lg shadow-sm">
          <p className="font-medium text-gray-900">♿ Need Custom Resources?</p>
          <p className="text-sm text-gray-600 mt-1">Contact our inclusive learning team for personalized adaptations. We can modify any resource to meet specific needs.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-semibold text-[#6b5b7c]">12</div>
            <div className="text-xs text-gray-600">Conditions</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-semibold text-[#6b5b7c]">500+</div>
            <div className="text-xs text-gray-600">Resources</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-semibold text-[#6b5b7c]">8</div>
            <div className="text-xs text-gray-600">Format Types</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Conditions Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Learning Conditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition) => (
              <Link 
                key={condition.id}
                href={`/inclusive/${condition.id}`}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{condition.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{condition.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{condition.prevalence}</p>
                    <p className="text-sm text-gray-600 mb-3">{condition.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {condition.formats.slice(0, 2).map(format => (
                        <span key={format} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {format}
                        </span>
                      ))}
                      {condition.formats.length > 2 && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          +{condition.formats.length - 2}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#6b5b7c]">{condition.resources} resources</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Inclusive Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Specialized Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredResources.map((res) => (
              <div key={res.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs bg-[#6b5b7c]/10 text-[#6b5b7c] px-2 py-1 rounded">
                    {res.condition}
                  </span>
                  <span className="text-sm font-medium">⭐ {res.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{res.title}</h3>
                <p className="text-xs text-gray-500 mb-3">Format: {res.format}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">KSh {res.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Contact */}
        <section className="mb-12 bg-gradient-to-r from-[#6b5b7c] to-[#584b68] text-white rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl block mb-4">🤝</span>
            <h2 className="text-2xl font-light mb-2">Need Personalized Support?</h2>
            <p className="text-white/80 mb-6">Our inclusive learning specialists can help you find the right resources or create custom adaptations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#6b5b7c] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                📞 Call 07XX XXX XXX
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                ✉️ Email Support
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

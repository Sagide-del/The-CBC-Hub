import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import MpesaPaymentModal from '../../../components/MpesaPaymentModal';

export default function Form4Biology() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const topics = [
    {
      id: 1,
      title: 'Unconditional Reflex Actions',
      description: 'Complete notes on reflex arcs, types of reflexes, and clinical applications following Bloom\'s Taxonomy',
      price: 30,
      pages: 12,
      questions: 25,
      image: '🧠',
      includes: ['Full notes', 'Diagrams', 'K.C.S.E questions', 'Marking scheme'],
      sample: '/samples/biology-reflex-actions.html'
    },
    {
      id: 2,
      title: 'Reception, Response and Coordination',
      description: 'Nervous system, neurons, synapses, and coordination in animals and plants',
      price: 45,
      pages: 18,
      questions: 32,
      image: '⚡',
      includes: ['Full notes', 'Neuron diagrams', 'Synapse illustrations', 'Past papers'],
      comingSoon: true
    },
    {
      id: 3,
      title: 'Growth and Development',
      description: 'Growth curves, hormones, metamorphosis, and regeneration',
      price: 40,
      pages: 15,
      questions: 28,
      image: '🌱',
      includes: ['Growth charts', 'Hormone tables', 'Metamorphosis stages'],
      comingSoon: true
    },
    {
      id: 4,
      title: 'Reproduction in Plants and Animals',
      description: 'Asexual and sexual reproduction, pollination, fertilization, and embryonic development',
      price: 55,
      pages: 24,
      questions: 40,
      image: '🌸',
      includes: ['Reproduction cycles', 'Fertilization diagrams', 'Past K.C.S.E questions'],
      comingSoon: true
    },
    {
      id: 5,
      title: 'Genetics',
      description: 'DNA structure, chromosomes, inheritance patterns, mutations, and genetic disorders',
      price: 60,
      pages: 28,
      questions: 45,
      image: '🧬',
      includes: ['Punnett squares', 'Pedigree charts', 'DNA diagrams', 'Revision questions'],
      comingSoon: true
    },
    {
      id: 6,
      title: 'Evolution',
      description: 'Theories of evolution, evidence of evolution, natural selection, and speciation',
      price: 35,
      pages: 14,
      questions: 22,
      image: '🦕',
      includes: ['Evolution timelines', 'Comparative anatomy', 'Past papers'],
      comingSoon: true
    },
    {
      id: 7,
      title: 'Ecology',
      description: 'Ecosystems, energy flow, nutrient cycles, pollution, and conservation',
      price: 50,
      pages: 20,
      questions: 35,
      image: '🌍',
      includes: ['Food chains', 'Pyramids', 'Cycles diagrams', 'Field techniques'],
      comingSoon: true
    },
    {
      id: 8,
      title: 'Biology Practical Manual',
      description: 'Complete practical guide with experiments, observations, and report writing',
      price: 70,
      pages: 32,
      questions: 20,
      image: '🔬',
      includes: ['15 experiments', 'Lab setup guides', 'Observation tables', 'Report templates'],
      comingSoon: true
    }
  ];

  const handleDownload = (resource) => {
    setSelectedResource(resource);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    // Redirect to PDF download
    window.open(`/api/generate-pdf?id=${selectedResource.id}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Head>
        <title>Form 4 Biology - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#2c6e63] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/student/form4" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Form 4
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">🧬</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-light">
                Biology<span className="font-semibold"> Form 4</span>
              </h1>
              <p className="text-lg text-white/80 mt-2">Complete notes following Bloom's Taxonomy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Info */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">8</div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">247</div>
              <div className="text-sm text-gray-600">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">KSh 30-70</div>
              <div className="text-sm text-gray-600">Per Topic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2c6e63]">✓ KICD</div>
              <div className="text-sm text-gray-600">Aligned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Featured Topic - Unconditional Reflex Actions */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#2c6e63] to-[#1e4f47] text-white rounded-xl p-8 mb-8">
            <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
              <div className="text-7xl">🧠</div>
              <div className="flex-1">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  NEW • Bloom's Taxonomy Integrated
                </span>
                <h2 className="text-3xl font-bold mb-3">Unconditional Reflex Actions</h2>
                <p className="text-white/90 text-lg mb-4">Complete Form 4 Biology notes with 6 levels of learning: Remember → Understand → Apply → Analyse → Evaluate → Create</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">📄 12 pages</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">❓ 25 questions</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">📊 With marking scheme</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🎯 K.C.S.E aligned</span>
                </div>
                <div className="flex items-center gap-4">
                  <Link 
                    href="/samples/biology-reflex-actions.html" 
                    target="_blank"
                    className="bg-white text-[#2c6e63] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Preview Sample
                  </Link>
                  <button 
                    onClick={() => handleDownload(topics[0])}
                    className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition text-lg"
                  >
                    KSh 30 - Download Full Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Biology Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">All Biology Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.id} className={`bg-white rounded-xl border border-gray-200 p-6 ${topic.comingSoon ? 'opacity-75' : 'hover:shadow-lg transition'}`}>
                <div className="text-4xl mb-4">{topic.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{topic.pages} pages</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{topic.questions} questions</span>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">Includes:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {topic.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {topic.comingSoon ? (
                  <div className="text-center py-3 bg-gray-100 rounded-lg text-gray-500 font-medium">
                    Coming Soon
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#2c6e63]">KSh {topic.price}</span>
                    <button 
                      onClick={() => handleDownload(topic)}
                      className="bg-[#2c6e63] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1e4f47] transition"
                    >
                      Download
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bloom's Taxonomy Explanation */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">🧠 Bloom's Taxonomy Integrated</h2>
          <p className="text-gray-600 mb-6">Our notes are structured to take students through all 6 levels of learning:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <span className="text-2xl font-bold text-blue-600">1</span>
              <h3 className="font-semibold mt-2">Remember</h3>
              <p className="text-sm text-gray-600">Definitions, key terms, characteristics</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <span className="text-2xl font-bold text-indigo-600">2</span>
              <h3 className="font-semibold mt-2">Understand</h3>
              <p className="text-sm text-gray-600">Explanations, diagrams, summaries</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <span className="text-2xl font-bold text-purple-600">3</span>
              <h3 className="font-semibold mt-2">Apply</h3>
              <p className="text-sm text-gray-600">Clinical cases, real-world examples</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <span className="text-2xl font-bold text-pink-600">4</span>
              <h3 className="font-semibold mt-2">Analyze</h3>
              <p className="text-sm text-gray-600">Comparisons, relationships, patterns</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <span className="text-2xl font-bold text-orange-600">5</span>
              <h3 className="font-semibold mt-2">Evaluate</h3>
              <p className="text-sm text-gray-600">Critical thinking, judgments, recommendations</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <span className="text-2xl font-bold text-red-600">6</span>
              <h3 className="font-semibold mt-2">Create</h3>
              <p className="text-sm text-gray-600">Design challenges, research proposals</p>
            </div>
          </div>
        </section>

        {/* K.C.S.E Practice */}
        <section className="bg-[#f8f4e9] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">📝 K.C.S.E Practice Questions</h2>
          <p className="text-gray-700 mb-4">Sample question from "Unconditional Reflex Actions" notes:</p>
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
            <p className="font-medium mb-3">Question (8 marks):</p>
            <p>Describe the pathway of a reflex action when a person accidentally touches a hot object. Include all the neurons and structures involved.</p>
            <div className="mt-4 text-sm text-gray-500">
              <span className="bg-[#2c6e63] text-white px-3 py-1 rounded-full">Marking scheme available in full notes</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">All topics include 20+ K.C.S.E style questions with complete marking schemes.</p>
        </section>

        {/* How to Download */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">📱 How to Download</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2c6e63] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-semibold mb-2">Select Topic</h3>
              <p className="text-sm text-gray-600">Choose the biology topic you need</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2c6e63] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-semibold mb-2">Pay via M-Pesa</h3>
              <p className="text-sm text-gray-600">KSh 30-70 per topic via Till Number <strong>345670</strong></p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2c6e63] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-semibold mb-2">Instant Download</h3>
              <p className="text-sm text-gray-600">Get PDF immediately after payment</p>
            </div>
          </div>
        </section>
      </main>

      {/* Payment Modal */}
      {showPaymentModal && (
        <MpesaPaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          item={selectedResource}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}

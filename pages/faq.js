import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function FAQ() {
  const [openSection, setOpenSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = {
    general: [
      {
        q: "What is CBC Hub?",
        a: "CBC Hub is Kenya's leading digital platform for Competency-Based Curriculum resources. We provide notes, worksheets, past papers, and teaching materials for students from PP1 to Form 4, plus a marketplace for educational supplies."
      },
      {
        q: "Is CBC Hub free to use?",
        a: "You can browse all resources for free. Downloads are pay-per-resource (starting from KSh 50). We also offer free samples and some free resources in each category."
      },
      {
        q: "Do I need to create an account?",
        a: "You can browse without an account. To download resources or make purchases, you'll need to create a free account. This helps us track your downloads and provide better recommendations."
      },
      {
        q: "Is CBC Hub available on mobile?",
        a: "Yes! Our website is fully mobile-optimized. We're also working on a mobile app for Android and iOS (coming soon)."
      }
    ],
    payments: [
      {
        q: "How do I pay for resources?",
        a: "We accept M-Pesa (STK push), Visa/Mastercard debit/credit cards, and bank transfers for schools. For bulk orders, we also accept LPO/LSO."
      },
      {
        q: "Is M-Pesa payment secure?",
        a: "Yes, all M-Pesa transactions are processed securely through Safaricom's Daraja API. We never store your M-Pesa PIN."
      },
      {
        q: "Do you offer refunds?",
        a: "Due to the digital nature of our products, we don't offer refunds after download. However, if you experience technical issues, contact us within 24 hours and we'll help resolve them."
      },
      {
        q: "Can schools pay via invoice?",
        a: "Yes! Schools can place bulk orders and pay via invoice or LPO. Contact our schools team at schools@cbchub.co.ke for assistance."
      }
    ],
    resources: [
      {
        q: "What grades do you cover?",
        a: "We cover PP1, PP2, Grade 1-9, and Form 1-4 (soon adding Form 4). All resources are aligned with the latest CBC curriculum."
      },
      {
        q: "Are the resources CBC-aligned?",
        a: "Absolutely! All our resources are created and vetted by experienced CBC teachers and curriculum specialists to ensure complete alignment."
      },
      {
        q: "Can I request specific resources?",
        a: "Yes! Use our contact form or email support@cbchub.co.ke with your requests. We add new resources based on user demand."
      },
      {
        q: "Do you have resources for special needs students?",
        a: "Yes! Our Inclusive Learning section has resources adapted for various learning conditions including visual impairment, dyslexia, autism, and more."
      }
    ],
    marketplace: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQs vary by product, typically from 5-20 units. School bundles are designed for classes of 40 students. Check individual product pages for specific MOQs."
      },
      {
        q: "Do you deliver nationwide?",
        a: "Yes, we deliver to all 47 counties. Delivery takes 3-5 days. Free delivery within Nairobi for orders over KSh 20,000."
      },
      {
        q: "Can I return physical products?",
        a: "Physical products can be returned within 7 days if unopened and in original packaging. Contact our support team to initiate a return."
      },
      {
        q: "Do you offer training for robotics kits?",
        a: "Yes! With every bulk robotics order, we include teacher guides. We also offer paid training sessions for schools (virtual or on-site)."
      }
    ],
    technical: [
      {
        q: "I can't download a resource I paid for",
        a: "First, check your email for the download link. If you still can't access it, contact support@cbchub.co.ke with your payment reference and we'll resolve it within 2 hours."
      },
      {
        q: "What file formats are available?",
        a: "Most resources are in PDF format for easy printing. Some worksheets are in Word format (editable). Videos are available as MP4 downloads or YouTube links."
      },
      {
        q: "Can I access resources offline?",
        a: "Yes! Once downloaded, PDFs and documents are yours to keep and use offline anytime."
      }
    ],
    teachers: [
      {
        q: "Can teachers upload their own resources?",
        a: "We're building a teacher contribution program! Soon, teachers will be able to upload and sell their own resources through our platform. Email teachers@cbchub.co.ke to join the waitlist."
      },
      {
        q: "Do you offer teacher training?",
        a: "Yes, we offer both online and in-person training sessions for schools adopting CBC Hub. Contact our schools team for more information."
      }
    ]
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Flatten all FAQs for search
  const allFaqs = Object.entries(faqs).flatMap(([category, questions]) => 
    questions.map(q => ({ ...q, category }))
  );

  const filteredFaqs = searchTerm 
    ? allFaqs.filter(faq => 
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>FAQ - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            Frequently Asked<span className="font-semibold"> Questions</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Find answers to common questions</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-2 flex items-center border border-gray-200">
          <span className="text-gray-400 px-3">🔍</span>
          <input 
            type="text" 
            placeholder="Search FAQs..." 
            className="flex-1 outline-none text-gray-700 p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-gray-400 hover:text-gray-600 px-2"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="max-w-3xl mx-auto px-6 mb-8">
          <p className="text-sm text-gray-600 mb-4">Found {filteredFaqs.length} results for "{searchTerm}"</p>
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-xs text-[#1a5f7a] mb-1 uppercase">{faq.category}</p>
                <p className="font-medium text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Categories */}
      {!searchTerm && (
        <main className="max-w-3xl mx-auto px-6 py-8">
          <div className="space-y-4">
            {/* General Questions */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection('general')}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">📋 General Questions</span>
                <span className="text-2xl text-gray-500">{openSection === 'general' ? '−' : '+'}</span>
              </button>
              {openSection === 'general' && (
                <div className="px-6 pb-4 space-y-4">
                  {faqs.general.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Payments */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection('payments')}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">💰 Payments & Billing</span>
                <span className="text-2xl text-gray-500">{openSection === 'payments' ? '−' : '+'}</span>
              </button>
              {openSection === 'payments' && (
                <div className="px-6 pb-4 space-y-4">
                  {faqs.payments.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection('resources')}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">📚 Resources</span>
                <span className="text-2xl text-gray-500">{openSection === 'resources' ? '−' : '+'}</span>
              </button>
              {openSection === 'resources' && (
                <div className="px-6 pb-4 space-y-4">
                  {faqs.resources.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Marketplace */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection('marketplace')}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">🛒 Marketplace</span>
                <span className="text-2xl text-gray-500">{openSection === 'marketplace' ? '−' : '+'}</span>
              </button>
              {openSection === 'marketplace' && (
                <div className="px-6 pb-4 space-y-4">
                  {faqs.marketplace.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Support */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection('technical')}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">🔧 Technical Support</span>
                <span className="text-2xl text-gray-500">{openSection === 'technical' ? '−' : '+'}</span>
              </button>
              {openSection === 'technical' && (
                <div className="px-6 pb-4 space-y-4">
                  {faqs.technical.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Teachers */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection('teachers')}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">👩‍🏫 For Teachers</span>
                <span className="text-2xl text-gray-500">{openSection === 'teachers' ? '−' : '+'}</span>
              </button>
              {openSection === 'teachers' && (
                <div className="px-6 pb-4 space-y-4">
                  {faqs.teachers.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900 mb-1">{faq.q}</p>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Still Need Help */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-3">❓</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Can't find what you're looking for? Our support team is here to help.</p>
            <Link 
              href="/contact"
              className="inline-block bg-[#1a5f7a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0e4a63] transition"
            >
              Contact Support
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}

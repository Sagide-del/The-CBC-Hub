import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            About<span className="font-semibold"> CBC Hub</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Empowering Kenyan education through quality resources</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Our Story */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              CBC Hub was founded in 2024 by a team of Kenyan educators and technology experts who saw a gap in accessible, 
              affordable educational resources aligned with the Competency-Based Curriculum (CBC).
            </p>
            <p>
              What started as a small collection of shared resources among teachers in Nairobi has grown into Kenya's 
              fastest-growing digital resource platform, serving over 5,000 students and 500 teachers across the country.
            </p>
            <p>
              Our mission is simple: <strong>make quality CBC resources accessible to every Kenyan learner, regardless of their location or economic background.</strong>
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <span className="text-3xl block mb-3">📚</span>
            <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
            <p className="text-sm text-gray-600">All resources are vetted by experienced CBC teachers and aligned to the latest curriculum requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <span className="text-3xl block mb-3">💰</span>
            <h3 className="font-semibold text-gray-900 mb-2">Affordable Access</h3>
            <p className="text-sm text-gray-600">Pay-per-download model means you only pay for what you need. No expensive subscriptions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <span className="text-3xl block mb-3">🇰🇪</span>
            <h3 className="font-semibold text-gray-900 mb-2">Kenya Made</h3>
            <p className="text-sm text-gray-600">Built by Kenyans, for Kenyans. We understand local classrooms and learning contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <span className="text-3xl block mb-3">♿</span>
            <h3 className="font-semibold text-gray-900 mb-2">Inclusive by Design</h3>
            <p className="text-sm text-gray-600">Resources adapted for learners with special needs. Every child deserves to learn.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <span className="text-3xl block mb-3">🤝</span>
            <h3 className="font-semibold text-gray-900 mb-2">Teacher Support</h3>
            <p className="text-sm text-gray-600">We're building a community where teachers share and grow together.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <span className="text-3xl block mb-3">🌱</span>
            <h3 className="font-semibold text-gray-900 mb-2">Growing Together</h3>
            <p className="text-sm text-gray-600">We're constantly adding new resources based on user feedback.</p>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a5f7a] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-3xl">
                👩‍🏫
              </div>
              <h3 className="font-semibold">Grace Wambui</h3>
              <p className="text-xs text-gray-500">Founder & Lead Educator</p>
              <p className="text-xs text-gray-400 mt-1">15 years CBC experience</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a5f7a] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-3xl">
                👨‍💻
              </div>
              <h3 className="font-semibold">James Omondi</h3>
              <p className="text-xs text-gray-500">Technical Director</p>
              <p className="text-xs text-gray-400 mt-1">Former EdTech lead</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a5f7a] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-3xl">
                👩‍🎓
              </div>
              <h3 className="font-semibold">Dr. Mary Kamau</h3>
              <p className="text-xs text-gray-500">Curriculum Specialist</p>
              <p className="text-xs text-gray-400 mt-1">PhD in Education</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a5f7a] rounded-full mx-auto mb-3 flex items-center justify-center text-white text-3xl">
                👨‍🏫
              </div>
              <h3 className="font-semibold">Peter Mwangi</h3>
              <p className="text-xs text-gray-500">Inclusive Learning Lead</p>
              <p className="text-xs text-gray-400 mt-1">Special needs educator</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1a5f7a] text-white rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">15,000+</div>
              <div className="text-sm text-white/80">Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-sm text-white/80">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-white/80">Teachers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">47</div>
              <div className="text-sm text-white/80">Counties</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

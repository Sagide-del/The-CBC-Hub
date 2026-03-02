import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#1a5f7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            Contact<span className="font-semibold"> Us</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">We're here to help</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+254 700 123 456</p>
                    <p className="text-sm text-gray-600">+254 722 987 654</p>
                    <p className="text-xs text-gray-500 mt-1">Mon-Fri, 8am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@cbchub.co.ke</p>
                    <p className="text-sm text-gray-600">support@cbchub.co.ke</p>
                    <p className="text-sm text-gray-600">schools@cbchub.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-gray-900">Office</p>
                    <p className="text-sm text-gray-600">3rd Floor, Bishop Magua Centre</p>
                    <p className="text-sm text-gray-600">Ngong Road, Nairobi</p>
                    <p className="text-sm text-gray-600">Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 8:00am - 5:00pm</p>
                    <p className="text-sm text-gray-600">Saturday: 9:00am - 1:00pm</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h2>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://facebook.com/cbchub" target="_blank" rel="noopener" 
                   className="flex items-center gap-2 p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                  <span className="text-xl">📘</span>
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a href="https://twitter.com/cbchub" target="_blank" rel="noopener"
                   className="flex items-center gap-2 p-3 bg-sky-50 text-sky-500 rounded-lg hover:bg-sky-100 transition">
                  <span className="text-xl">🐦</span>
                  <span className="text-sm font-medium">Twitter/X</span>
                </a>
                <a href="https://instagram.com/cbchub" target="_blank" rel="noopener"
                   className="flex items-center gap-2 p-3 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition">
                  <span className="text-xl">📷</span>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a href="https://youtube.com/@cbchub" target="_blank" rel="noopener"
                   className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">
                  <span className="text-xl">▶️</span>
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a href="https://linkedin.com/company/cbchub" target="_blank" rel="noopener"
                   className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition">
                  <span className="text-xl">🔗</span>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="https://wa.me/254700123456" target="_blank" rel="noopener"
                   className="flex items-center gap-2 p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition">
                  <span className="text-xl">💬</span>
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-light text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-6">We'll get back to you within 24 hours</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. We'll respond shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-green-600 hover:text-green-800"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f7a]"
                        placeholder="John Kamau"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f7a]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f7a]"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">School/Organization</label>
                      <input
                        type="text"
                        value={formData.school}
                        onChange={(e) => setFormData({...formData, school: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f7a]"
                        placeholder="Moi Primary School"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f7a]"
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales & Bulk Orders</option>
                      <option value="resources">Resource Request</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f7a]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a5f7a] text-white py-3 rounded-lg font-medium hover:bg-[#0e4a63] transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h2>
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl block mb-2">📍</span>
              <p className="text-gray-700">3rd Floor, Bishop Magua Centre</p>
              <p className="text-gray-700">Ngong Road, Nairobi</p>
              <p className="text-sm text-gray-500 mt-2">(Map integration coming soon)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

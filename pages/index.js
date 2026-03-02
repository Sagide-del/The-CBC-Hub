import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>CBC Hub - Competency Based Curriculum</title>
        <meta name="description" content="CBC Learning Platform for Students and Teachers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Welcome to CBC Hub
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-12">
          Competency Based Curriculum Learning Platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link href="/student-dashboard" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Student</h2>
            <p className="text-gray-600">Access lessons, DIY projects, and track your progress</p>
          </Link>

          <Link href="/teacher-dashboard" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Teacher</h2>
            <p className="text-gray-600">Resources, lesson plans, and material orders</p>
          </Link>

          <Link href="/inclusive-learning" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Inclusive Learning</h2>
            <p className="text-gray-600">Adaptive learning for all students</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

import { useState, useEffect } from 'react';

export default function StudentDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiMessage, setApiMessage] = useState('');

  // Hardcoded fallback
  const hardcodedProjects = [
    {
      _id: '1',
      title: 'Build a Recycled Robot',
      difficulty: 'Medium',
      estimatedTime: '60-90 minutes'
    }
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        // First test if API is working
        const testRes = await fetch('/api/test');
        const testData = await testRes.json();
        console.log('Test API:', testData);
        setApiMessage('✅ API is working');

        // Then fetch from Sanity proxy
        const sanityRes = await fetch('/api/sanity-proxy');
        const sanityData = await sanityRes.json();
        console.log('Sanity data:', sanityData);

        if (sanityData.success && sanityData.data?.result?.length > 0) {
          setProjects(sanityData.data.result);
          setApiMessage('✅ Connected to Sanity');
        } else {
          setProjects(hardcodedProjects);
          setApiMessage('⚠️ Using sample data (Sanity returned no data)');
        }
      } catch (error) {
        console.error('Error:', error);
        setProjects(hardcodedProjects);
        setApiMessage(`❌ Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function ProjectCard({ title, difficulty, estimatedTime }) {
    const difficultyColors = {
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Hard: "bg-red-100 text-red-800"
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`inline-block text-xs px-2 py-1 rounded mb-2 ${
          difficultyColors[difficulty] || "bg-gray-100 text-gray-800"
        }`}>
          {difficulty}
        </p>
        <p className="text-gray-600">⏱️ {estimatedTime}</p>
      </div>
    );
  }

  function ProgressBar({ value, max }) {
    const percentage = (value / max) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Progress</h2>
          <ProgressBar value={65} max={100} />
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DIY Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project._id}
                title={project.title}
                difficulty={project.difficulty}
                estimatedTime={project.estimatedTime}
              />
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded text-sm">
            Status: {apiMessage}
          </div>

          <div className="mt-2 text-xs text-gray-500">
            <p>Debug URLs:</p>
            <ul className="list-disc pl-5">
              <li><a href="/api/test" target="_blank" className="text-blue-600 underline">Test API</a></li>
              <li><a href="/api/sanity-proxy" target="_blank" className="text-blue-600 underline">Sanity Proxy</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
